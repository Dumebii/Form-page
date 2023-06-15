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
    <div className='flex bg-white mt-10 ml-[11rem] rounded-xl w-[63rem]'>
    <div className='m-5'><Selector /></div>
    <div className='m-10'>
    <div className='m-5'>
    <h1 className=' text-blue-900 font-bold text-3xl'>
      Select your plan
    </h1>
    <p className='paragraph font-normal mt-2 text-sm'>
      We have the option of monthly or yearly billing
    </p>
    </div>
    
    <div className='flex'>
       <div className='w-[12rem] h-[12rem] first-div m-3' onMouseOver={hidden}>
         <img className='pl-6 mt-6 mb-6' src={Arcade} />
         <p className='pl-6 second-paragraph'>Arcade</p>
         <p className='pl-6 first-paragraph'>{state? '$90/mo' : '$9/mo'}</p>
         {state && <p className='m-6'>2 months free</p>}
         
        </div>
        <div className='w-[12rem] h-[12rem] first-div m-3' >
         <img className='pl-6 mt-6 mb-6' src={Advanced} />
         <p className='pl-6 second-paragraph'>Advanced</p>
         <p className='pl-6 first-paragraph'>{state? '$120/mo' : '$12/mo'}</p>
         {state && <p className='m-6'>2 months free</p>}
        </div>
        <div className='w-[12rem] h-[12rem] first-div m-3'>
         <img className='pl-6 mt-6 mb-6' src={Pro} />
         <p className='pl-6 second-paragraph'>Pro</p>
         <p className='pl-6 first-paragraph'>{state? '$150/mo' : '$15/mo'}</p>
         {state && <p className='m-6'>2 months free</p>}
        </div> 
       </div>
       <div className='w-[37rem] h-10 bg-neutral-100 m-4 rounded-md'>
        <span className='pl-[10rem] text-blue-900'>Monthly</span> 
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
        <Link to={`/pick`}><button className="ml-[25rem] border
         bg-blue-800 font-normal
        rounded-md p-2">
        Next step</button></Link>
      </div>
      
       </div>
  
</div>
)}