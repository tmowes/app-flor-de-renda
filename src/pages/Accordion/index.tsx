/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { data } from '../../temp/products'
import api from '../../services/api'

interface CartState {
  id: string
  title: string
  price: number
  quantity: number
  isSelect?: boolean
}

const Accordion: React.FC = () => {
  const [products, setProducts] = useState<CartState[]>([])
  const navigation = useNavigation()
  const [popup, setPopup] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  function handlerPopup() {
    if (!popup) {
      setPopup(true)
      console.log('popup state?', popup)
    } else {
      setPopup(false)
      console.log('popup state?', popup)
    }
  }

  function findDataIndex(data_id: string) {
    const dataIndex = data.findIndex(d => d.id === data_id)
  }

  // fetch('https://jsonplaceholder.typicode.com/photos')
  //   .then(response => response.json())
  //   .then(responseJson => {
  //     responseJson = responseJson.map(item => {
  //       item.isSelect = false
  //       item.selectedClass = styles.list
  //       return item
  //     })

  //     setState({
  //       loading: false,
  //       dataSource: responseJson,
  //     })
  //   })
  //   .catch(error => {
  //     setState({ loading: false })
  //   })

  // function selectItem(data: CartState) {
  //   data.item.isSelect = !data.item.isSelect
  //   data.item.selectedClass = data.item.isSelect ? styles.selected : styles.list

  //   const dataIndex = data.findIndex((item: string) => data.item.id === item.id)

  //   state.dataSource[index] = data.item

  //   setState({
  //     dataSource: state.dataSource,
  //   })
  // }

  // function renderList(item: any) {
  //   return (
  //     <TouchableOpacity
  //       style={[styles.list, data.selectedClass]}
  //       onPress={() => {}}
  //     >
  //       <Image
  //         source={{ uri: data.thumbnailUrl }}
  //         style={{ width: 40, height: 40, margin: 6 }}
  //       />
  //       <Text style={styles.lightText}>
  //         {' '}
  //         {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
  //       </Text>
  //     </TouchableOpacity>
  //   )
  // }

  const itemNumber = data.filter(item => item.isSelect).length
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="purple" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>productsAvailable</Text>
      {/* <FlatList
        data={data}
        renderItem={item => renderList(item.item)}
        keyExtractor={item => String(item.id)}
      /> */}

      <View style={styles.numberBox}>
        <Text style={styles.number}>{itemNumber}</Text>
      </View>

      <TouchableOpacity style={styles.icon}>
        <View>
          <Icon
            raised
            name="shopping-cart"
            type="font-awesome"
            color="#e3e3e3"
            size={30}
            onPress={() => {}}
            containerStyle={{ backgroundColor: '#FA7B5F' }}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192338',
    paddingVertical: 50,
    position: 'relative',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 5,
    margin: 3,
    flexDirection: 'row',
    backgroundColor: '#192338',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: -1,
  },
  lightText: {
    color: '#f7f7f7',
    width: 200,
    paddingLeft: 15,
    fontSize: 12,
  },
  icon: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    left: 290,
    zIndex: 1,
  },
  numberBox: {
    position: 'absolute',
    bottom: 75,
    width: 30,
    height: 30,
    borderRadius: 15,
    left: 330,
    zIndex: 3,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: { fontSize: 14, color: '#000' },
  selected: { backgroundColor: '#FA7B5F' },
})

export default Accordion
