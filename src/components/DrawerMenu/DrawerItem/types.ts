export interface DrawerItemProps {
  drawerData: DrawerDataProps
}

interface DrawerDataProps {
  icon: string
  label: string
  screen: string
  selected: boolean
}
