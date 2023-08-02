import '../index.css';
import { Link } from "react-router-dom";
import { useState } from 'react';


export default function Selector(  ) {
  const [blink, setBlink] = useState(true)
  function onClick(){
    setBlink(false)
  }

   return(
    <div className="background flex-row lg:mt-5 lg:ml-3 lg:mb-5">
      <div className='flex-col selector-flex'>
      <div className='flex-container'>
      <Link to={`/`}><button className=' mr-5 ml-5 pl-2 pr-2 selector-button' onClick={onClick}>
            1
        </button> </Link>
        <p className='paragraph selector-paragraph'> Step 1 <br/> <span className='mt-8 font-medium selector-span' >YOUR INFO</span></p>

      </div>
      <div className='flex-container'>
      <Link to={`/plan`}><button className='mr-5 ml-5 pl-2 pr-2 selector-button' onClick={onClick}>
            2
        </button> </Link>
        <p className='paragraph selector-paragraph'> Step 2 <br/> <span className='font-medium selector-span'>SELECT PLAN</span></p>

      </div>
        <div className='flex-container'>
        <Link to={`/pick`}><button className='mr-5 ml-5 pl-2 pr-2 selector-button' onClick={onClick}>
             3
          </button></Link>
          <p className='paragraph selector-paragraph'> Step 3 <br/> <span className='font-medium selector-span' >ADD-ONS</span></p>

        </div>
        <div className='flex-container'>
        <Link to={`/thankyou`}><button className={`mr-5 ml-5 pl-2 pr-2 selector-button ${blink? 'bg-blue-400' : "bg-white"}`}>
             4 
          </button></Link>
          <p className='paragraph selector-paragraph'> Step 4 <br/> <span className='font-medium selector-span'>SUMMARY</span></p>

        </div>
      </div>     
      </div>
   )
}


