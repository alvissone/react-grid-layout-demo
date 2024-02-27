import React from 'react'
import { Tabs } from 'antd'
import Demo from './pages/demo/index.jsx'

import './App.less'
	
const App = () => {
  const items = [
    {
      key: 'basic',
      label: '基础的',
      children: <Demo />
    }
  ]
  return (
    <div>
      <Tabs defaultActiveKey="basic" items={items} />
    </div>
  )
}

export default App
