import { useState } from 'react'
import './App.css'
import { Layout, Menu, theme} from 'antd'
const { Header, Sider, Content } = Layout
import Heatmap from './components/HeatMap'
import RenderSquares from './components/homebrewMap'
import BlankGrid from './components/BlankGrid'

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

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

function App() {
  
  const [count, setCount] = useState(0)

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="App">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <h2>Happy Habbit</h2>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      
      <BlankGrid />

    </div>
  )
}

export default App
