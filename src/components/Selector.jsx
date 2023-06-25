import '../index.css';


export default function Selector( blink ) {
   return(
    <div className="background flex-row mt-5 ml-3 mb-5">
      <div className='flex-col'>
      <div className='flex-container'>
        <button className=' mr-5 ml-5 pl-2 pr-2'>
            1
        </button>
        <p className='paragraph'> Step 1 <br/> <span className='mt-8 font-medium selector-span' >YOUR INFO</span></p>

      </div>
      <div className='flex-container'>
        <button className='mr-5 ml-5 pl-2 pr-2 '>
            2
        </button>
        <p className='paragraph'> Step 2 <br/> <span className='font-medium selector-span'>SELECT PLAN</span></p>

      </div>
        <div className='flex-container'>
          <button className='mr-5 ml-5 pl-2 pr-2 '>
             3
          </button>
          <p className='paragraph'> Step 3 <br/> <span className='font-medium selector-span' >ADD-ONS</span></p>

        </div>
        <div className='flex-container'>
           <button className={`mr-5 ml-5 pl-2 pr-2 ${blink? 'bg-blue-400' : 'bg-zinc-900'}`}>
             4 
          </button>
          <p className='paragraph'> Step 4 <br/> <span className='font-medium selector-span'>SUMMARY</span></p>

        </div>
      </div>     
      </div>
   )
}


