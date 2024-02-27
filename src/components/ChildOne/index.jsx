import React from 'react'
import { Button } from 'antd'

const ChildOne = (props) => {
  const { className, key, style } = props
  

  const onClick = e => {
    e.preventDefault()
    e.stopPropagation()
    console.log('点击ChildOne了')
  }
  return <div className={className} key={key} style={style}>
    <span className='text'>
      <Button onMouseDown={ e => e.stopPropagation() } onClick={e => { onClick(e) }}>
        ChildOne
      </Button>
    </span>
  </div>
}

export default ChildOne
