import Arcade from './images/icon-arcade.svg'
import Advanced from './images/icon-advanced.svg'
import Pro from './images/icon-pro.svg'
import { useState } from 'react'

export default function Plan() {
    const [state, changeState] = useState(false)
    function hidden() {
     changeState(!state)
    }

    const [check, handleCheck] = useState(false)
    function checking() {
        handleCheck(!check)
    }

    return ( 
    <div className='flex'>
    <div>
       <div className='w-[12rem] h-[12rem] first-div m-3' onMouseOver={hidden}>
         <img className='pl-6 mt-6 mb-6' src={Arcade} />
         <p className='pl-6 second-paragraph'>Arcade</p>
         <p className='pl-6 first-paragraph'>$9/mo</p>
         {state && <p className='m-6'>2 months free</p>}
         
       </div>
       <div className='w-[12rem] h-[12rem] first-div m-3' >
         <img className='pl-6 mt-6 mb-6' src={Advanced} />
         <p className='pl-6 second-paragraph'>Advanced</p>
         <p className='pl-6 first-paragraph'>$12/mo</p>
         {state && <p className='m-6'>2 months free</p>}
       </div>
       <div className='w-[12rem] h-[12rem] first-div m-3'>
         <img className='pl-6 mt-6 mb-6' src={Pro} />
         <p className='pl-6 second-paragraph'>Pro</p>
         <p className='pl-6 first-paragraph'>$15/mo</p>
         {state && <p className='m-6'>2 months free</p>}
       </div> </div>
<div className='w-[30rem] h-10 bg-neutral-200'>
<span className='ml-5'>Monthly</span> <label className="switch m-3">
  <input type="checkbox" className='input' checked={check} onChange={checking}/>
  <span className="slider round"></span>
</label> <span className={`${check? 'text-green-400' : 'text-white-100'}`}>Yearly</span>
</div>
 </div>
)
}