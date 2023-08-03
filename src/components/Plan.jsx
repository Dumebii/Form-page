import Arcade from './images/icon-arcade.svg'
import Advanced from './images/icon-advanced.svg'
import Pro from './images/icon-pro.svg'
import { useState } from 'react'
import Selector from './Selector'
import { Link } from "react-router-dom";


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
    <div className='flex lg:bg-white lg:mt-10 lg:ml-[11rem] white-rounding lg:w-[63rem] pick-main'>
    <div className='lg:m-5'><Selector /></div>
    <div className='lg:m-10 plan'>
    <div className='m-5'>
    <h1 className=' text-blue-900 font-bold text-3xl'>
      Select your plan
    </h1>
    <p className='paragraph font-normal mt-2 text-sm'>
      We have the option of monthly or yearly billing
    </p>
    </div>
    
    <div className='flex plan-flex'>
       <div className='lg:w-[12rem] lg:h-[12rem] first-div m-3 options-flex' onMouseOver={hidden}>
         <img className='pl-6 mt-6 mb-6' src={Arcade} />
         <div><p className='pl-6 second-paragraph'>Arcade</p>
         <p className='pl-6 first-paragraph'>{state? '$90/mo' : '$9/mo'}</p>
         {state && <p className='m-6'>2 months free</p>}</div>
         
        </div>
        <div className='lg:w-[12rem] lg:h-[12rem] first-div m-3 options-flex' >
         <img className='pl-6 mt-6 mb-6' src={Advanced} />
         <div><p className='pl-6 second-paragraph'>Advanced</p>
         <p className='pl-6 first-paragraph'>{state? '$120/mo' : '$12/mo'}</p>
         {state && <p className='m-6'>2 months free</p>}</div>
        </div>
        <div className='lg:w-[12rem] lg:h-[12rem] first-div m-3 options-flex'>
         <img className='pl-6 mt-6 mb-6' src={Pro} />
         <div><p className='pl-6 second-paragraph'>Pro</p>
         <p className='pl-6 first-paragraph'>{state? '$150/mo' : '$15/mo'}</p>
         {state && <p className='m-6'>2 months free</p>}</div>
        </div> 
       </div>
       <div className='lg:w-[37rem] lg:h-10 bg-neutral-100 m-4 rounded-md'>
        <span className='lg:pl-[10rem] text-blue-900'>Monthly</span> 
        <label className="switch m-3">
          <input type="checkbox" className='input' checked={check} onChange={checking}/>
        <span className="slider round"></span>
        </label> 
        <span className={`${check? 'text-green-400' : 'text-blue-900'}`}>Yearly
        </span>
      </div>
      <div className='flex mt-10'>
        <Link to={`/`}><p className="ml-10 paragraph
        rounded-md p-3">Go back</p></Link>
        <Link to={`/pick`}><button className="lg:ml-[25rem] border
         bg-blue-800 font-normal text-white ml-5
        rounded-md p-2">
        Next step</button></Link>
      </div>
      
       </div>
  
</div>
)}