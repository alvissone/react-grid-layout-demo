import React, { useEffect, useRef, useState } from "react"

const ChildTwo = (props) => {
  const { className, key, style, refreshTime } = props
  const ref = useRef()
  const [height, setHeight] = useState(0)

  useEffect(() => {
    console.log('ChildTwo刷新了')
  }, [])
  useEffect(() => {
    console.log('refreshTime: ', refreshTime)
    setHeight(ref.current?.offsetHeight)
  }, [refreshTime])
  useEffect(() => {
    console.log('height:', height)
  }, [height])

  return <div className={className} key={key} ref={ref}>
    <span className='text'>ChildTwo</span>
  </div>
}

export default ChildTwo
