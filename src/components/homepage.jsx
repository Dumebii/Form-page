import React from 'react'
import Selector from './Selector'
import Form from './Form'

const Homepage = ( blink ) => {
  return (
    <div className="flex ml-[11rem] mt-10 bg-white white-rounding w-[63rem]">
  <Selector
  blink-page = {blink} />
  <Form /> </div>
  )
}

export default Homepage