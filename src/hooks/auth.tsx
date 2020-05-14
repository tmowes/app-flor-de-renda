import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import api from '../services/api'

interface AuthStateData {
  token: string
  user: object
}

interface SignCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: object
  loading: boolean
  signIn(credentials: SignCredentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthStateData>({} as AuthStateData)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@FlorDeRenda: token',
        '@FlorDeRenda: user',
      ])
      if (token[1] && user[1])
        setData({
          token: token[1],
          user: JSON.parse(user[1]),
        })
      setLoading(false)
    }
    loadStorageData()
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    })
    const { token, user } = response.data
    await AsyncStorage.multiSet([
      ['@FlorDeRenda: token', token],
      ['@FlorDeRenda: user', JSON.stringify(user)],
    ])
    setData({ token, user })
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@FlorDeRenda: token',
      '@FlorDeRenda: user',
    ])
    setData({} as AuthStateData)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('Auth must be used within a AuthProvider')
  }
  return context
}
