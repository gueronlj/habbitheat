import { Layout, Menu} from 'antd'
const { Header } = Layout
import { Link } from 'react-router-dom'

const menuItems = ['Login', 'Logout', 'Profile'].map((key) => ({
  key,
  label: key,
}));

export const AppBar = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#213547'}}>
      <h2>Habit Visualizer</h2>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      <Menu 
        theme="dark" 
        mode="horizontal" 
        defaultSelectedKeys={["2"]} 
        items={menuItems} 
        style={{backgroundColor: '#213547'}}/>
    </Header>
  )
}