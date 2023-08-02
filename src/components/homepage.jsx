import React from 'react'
import Selector from './Selector'
import Form from './Form'
import { useState } from 'react'

const Homepage = () => {
  const [blink, setBlink] = useState(true)
  return (
    <div className="flex lg:ml-[11rem] lg:mt-10 lg:bg-white white-rounding lg:w-[63rem] homepage-main">
  <Selector
  blinkPage = {blink} />
  <div className='homepage'>
  <Form />
  </div>
  </div>
  )
}

export default Homepage