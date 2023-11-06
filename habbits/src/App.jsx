import './App.css'
import { useState } from 'react'
import { Layout, Menu} from 'antd'
import { RHM } from './components/Heatmap/RHM'

const { Header, Sider, Content } = Layout
const user = {
  name: 'Lorens',
  level: 1,
  habbits: [
    {
      name: 'Gym',
      count: 0
    },
    {
      name: 'Coding',
      count: 0
    }
  ]
}

const menuItems = ['Login', 'Logout', 'Profile'].map((key) => ({
  key,
  label: key,
}));

function App() {
  
  const [heatColors, setHeatColors] = useState();

  return (
    <div className="App">
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <h2>Happy Habbit</h2>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={menuItems} />
        </Header>

        <RHM/>
    </div>
  )
}

export default App
