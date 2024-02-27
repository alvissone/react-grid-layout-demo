import React, { useState, useMemo } from 'react'
import _ from "lodash"
import RGL, { WidthProvider } from "react-grid-layout"
import ChildOne from '@/components/ChildOne/index.jsx'
import ChildTwo from '@/components/ChildTwo/index.jsx'

const Demo = () => {
  const ResponsiveReactGridLayout = useMemo(() => WidthProvider(RGL), [])

  const [refreshTime, setRefreshTime] = useState(0)
  const items = [
    {
      key: 'static-div',
      static: true,
      element: <div className="basic-div">
        <span className='text'>static-div</span>
      </div>
    },
    {
      key: 'child-one',
      static: false,
      element: <ChildOne className="basic-div" style={{ height: '100% '}} />
    },
    {
      key: 'child-two',
      static: false,
      element: <ChildTwo className="basic-div" refreshTime={refreshTime} />
    },
  ]
  /**
   * i: 子元素的Key
   * 
   * x: 子元素x轴坐标
   * 
   * y: 子元素y轴坐标
   * 
   * w: 宽度，计算公式为 width/clos*w - 间距；
   *    关与间距：默认上下左右的间距都是10，控制台查看第一个子元素样式通过绝对定位+transform: translate(10px, 10px);实现
   * 
   * h: 高度，计算公式为rowHeight*h + 11.6（默认值，瞎猜的）
   * 
   * static：设置为true，子元素不可拖动；不设置默认为false
   */
  const layouts = [
    {"x":0,"y":0,"w":2,"h":3,"i":"static-div","static":true},
    {"x":2,"y":0,"w":2,"h":4, minH: 2, "i":"child-one","static":false},
    {"x":4,"y":0,"w":2,"h":4,"i":"child-two","static":false}
  ]

  const generateDOM = () => {
    console.log('generateDOM.items: ', items)
    return items.map(item => {
      return (
        <div key={item.key}>
          {item.element}
        </div>
      )
    })
  }
  
  const onResize = (layout, oldItem, newItem) => {
    switch (newItem.i) {
      case 'child-two':
        setRefreshTime(new Date().getTime())
        break;
    
      default:
        break;
    }
  }
  
  return (
    <div className="demo-wrapper">
      <ResponsiveReactGridLayout
        className="layout"
        layout={layouts}
        cols={12}
        rowHeight={30}
        onLayoutChange={layout => console.log('onLayoutChange.layout:', layout)}
        onResizeStop={(layout, oldItem, newItem) => onResize(layout, oldItem, newItem)}
      >
        {
          generateDOM()
        }
      </ResponsiveReactGridLayout>
    </div>
  )
}

export default Demo
