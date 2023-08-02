import '../index.css';
import { Link } from "react-router-dom";


export default function Selector( blinkPage ) {
   return(
    <div className="background flex-row lg:mt-5 lg:ml-3 lg:mb-5">
      <div className='flex-col selector-flex'>
      <div className='flex-container'>
      <Link to={`/`}><button className=' mr-5 ml-5 pl-2 pr-2 selector-button'>
            1
        </button> </Link>
        <p className='paragraph selector-paragraph'> Step 1 <br/> <span className='mt-8 font-medium selector-span' >YOUR INFO</span></p>

      </div>
      <div className='flex-container'>
      <Link to={`/plan`}><button className='mr-5 ml-5 pl-2 pr-2 selector-button'>
            2
        </button> </Link>
        <p className='paragraph selector-paragraph'> Step 2 <br/> <span className='font-medium selector-span'>SELECT PLAN</span></p>

      </div>
        <div className='flex-container'>
        <Link to={`/pick`}><button className='mr-5 ml-5 pl-2 pr-2 selector-button'>
             3
          </button></Link>
          <p className='paragraph selector-paragraph'> Step 3 <br/> <span className='font-medium selector-span' >ADD-ONS</span></p>

        </div>
        <div className='flex-container'>
        <Link to={`/thankyou`}><button className={`mr-5 ml-5 pl-2 pr-2 selector-button ${blinkPage? 'bg-blue-400' : 'bg-zinc-900'}`}>
             4 
          </button></Link>
          <p className='paragraph selector-paragraph'> Step 4 <br/> <span className='font-medium selector-span'>SUMMARY</span></p>

        </div>
      </div>     
      </div>
   )
}


