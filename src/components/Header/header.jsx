import { Layout, Menu} from 'antd'
const { Header } = Layout
const menuItems = ['Login', 'Logout', 'Profile'].map((key) => ({
  key,
  label: key,
}));

export const AppBar = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#213547'}}>
      <h2>Habit Visualizer</h2>
      <Menu 
        theme="dark" 
        mode="horizontal" 
        defaultSelectedKeys={["2"]} 
        items={menuItems} 
        style={{backgroundColor: '#213547'}}/>
    </Header>
  )
}