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
      data: [
        { date: '2024/01/11', count:2 },
        ...[...Array(20)].map((_, idx) => ({ date: `2024/01/${idx + 1}`, count: idx })),
        ...[...Array(22)].map((_, idx) => ({ date: `2024/02/${idx + 2}`, count: idx })),
        ...[...Array(28)].map((_, idx) => ({ date: `2024/03/${idx + 3}`, count: idx })),
        ...[...Array(27)].map((_, idx) => ({ date: `2024/04/${idx + 0}`, count: idx })),
        ...[...Array(27)].map((_, idx) => ({ date: `2024/05/${idx + 1}`, count: idx })),
        ...[...Array(26)].map((_, idx) => ({ date: `2024/06/${idx + 3}`, count: idx })),
        ...[...Array(19)].map((_, idx) => ({ date: `2024/07/${idx + 6}`, count: idx })),
        ...[...Array(30)].map((_, idx) => ({ date: `2024/08/${idx + 2}`, count: idx })),
        ...[...Array(23)].map((_, idx) => ({ date: `2024/09/${idx + 4}`, count: idx })),
        ...[...Array(26)].map((_, idx) => ({ date: `2024/10/${idx + 3}`, count: idx })),
        ...[...Array(27)].map((_, idx) => ({ date: `2024/11/${idx + 1}`, count: idx })),
      ]
    },
    {
      name: 'Coding',
      data: [
        { date: '2024/01/11', count:2 },
        ...[...Array(18)].map((_, idx) => ({ date: `2024/01/${idx + 1}`, count: idx })),
        ...[...Array(23)].map((_, idx) => ({ date: `2024/02/${idx + 2}`, count: idx })),
        ...[...Array(24)].map((_, idx) => ({ date: `2024/03/${idx + 1}`, count: idx })),
        ...[...Array(29)].map((_, idx) => ({ date: `2024/04/${idx + 3}`, count: idx })),
        ...[...Array(28)].map((_, idx) => ({ date: `2024/06${idx + 1}`, count: idx })),
        ...[...Array(30)].map((_, idx) => ({ date: `2024/07/${idx + 0}`, count: idx })),
        ...[...Array(16)].map((_, idx) => ({ date: `2024/08/${idx + 5}`, count: idx })),
        ...[...Array(27)].map((_, idx) => ({ date: `2024/09/${idx + 0}`, count: idx })),
        ...[...Array(26)].map((_, idx) => ({ date: `2024/10/${idx + 3}`, count: idx })),
        ...[...Array(23)].map((_, idx) => ({ date: `2024/11/${idx + 1}`, count: idx })),
        ...[...Array(29)].map((_, idx) => ({ date: `2024/12/${idx + 1}`, count: idx })),
        { date: '2024/04/12', count:0},
      ]
    },
    {
      name: 'Guitar Practice',
      data: [
        { date: '2024/01/11', count:2 },
        ...[...Array(29)].map((_, idx) => ({ date: `2024/01/${idx + 4}`, count: idx })),
        ...[...Array(21)].map((_, idx) => ({ date: `2024/02/${idx + 1}`, count: idx })),
        ...[...Array(30)].map((_, idx) => ({ date: `2024/03/${idx + 1}`, count: idx })),
        ...[...Array(28)].map((_, idx) => ({ date: `2024/04/${idx + 3}`, count: idx })),
        ...[...Array(22)].map((_, idx) => ({ date: `2024/05/${idx + 2}`, count: idx })),
        ...[...Array(27)].map((_, idx) => ({ date: `2024/06/${idx + 0}`, count: idx })),
        ...[...Array(14)].map((_, idx) => ({ date: `2024/07/${idx + 5}`, count: idx })),
        ...[...Array(19)].map((_, idx) => ({ date: `2024/08/${idx + 1}`, count: idx })),
        ...[...Array(26)].map((_, idx) => ({ date: `2024/09/${idx + 0}`, count: idx })),
        ...[...Array(25)].map((_, idx) => ({ date: `2024/11/${idx + 1}`, count: idx })),
        ...[...Array(29)].map((_, idx) => ({ date: `2024/12/${idx + 2}`, count: idx })),
      ]
    }
  ]
}

const menuItems = ['Login', 'Logout', 'Profile'].map((key) => ({
  key,
  label: key,
}));

function App() {
  
  const [currentUser, setCurrentUser] = useState(user);

  const allHeatMaps = currentUser.habbits.map((habbit, i ) => {
    return (
      <RHM
        key={i}
        activity={habbit.name}
        data={habbit.data}

      />
    )
  })


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
        <div className='content'>
          {allHeatMaps}
        </div>
    </div>
  )
}

export default App
