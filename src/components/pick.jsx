import React from 'react'
import { useState } from 'react'

const Pick = () => {
    const [check, handleCheck] = useState(false)
    
    function checking() {
      handleCheck(!check)
    }

  return (
    <div>
        <main>
            <h1>
                Pick add-ons
            </h1>
            <p>Add-ons help help improve your gaming experience</p>
            <div className='flex'>
                <input type='checkbox' onChange={checking} />
                <div className='flex'>
                    <div>
                      <h4>Online services</h4>
                      <p>Access to multi play games</p>
                    </div>
                    <p>+$10/yr</p>
                </div>
            </div>
            <div className='flex'>
                <input type='checkbox' onChange={checking} />
                <div className='flex'>
                    <div>
                      <h4>Larger Storage</h4>
                      <p>Extra 1TB of cloud save</p>
                    </div>
                    <p>+$20/yr</p>
                </div>
            </div>
            <div className='flex'>
                <input type='checkbox' onChange={checking} />
                <div className='flex'>
                    <div>
                      <h4>Customizable profile</h4>
                      <p>Custom theme on your profile</p>
                    </div>
                    <p>+$20/yr</p>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Pick