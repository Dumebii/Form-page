import '../index.css';


export default function Selector() {
   return(
    <div className="background flex-row mt-5">
      {/* <h1>
        We are trying, to the absolute glory of our Lord Jesus!!
      </h1> */}
      <div className='flex-col'>
      <div className='flex-container'>
        <button className=' mr-5 ml-5 pl-2 pr-2'>
            1
        </button>
        <p className='paragraph'> Step 1 <br/> <span className='mt-8 font-medium' >YOUR INFO</span></p>

      </div>
      <div className='flex-container'>
        <button className='mr-5 ml-5 pl-2 pr-2 '>
            2
        </button>
        <p className='paragraph'> Step 2 <br/> <span className='font-medium'>SELECT PLAN</span></p>

      </div>
        <div className='flex-container'>
          <button className='mr-5 ml-5 pl-2 pr-2 '>
             3
          </button>
          <p className='paragraph'> Step 3 <br/> <span className='font-medium' >ADD-ONS</span></p>

        </div>
        <div className='flex-container'>
           <button className='mr-5 ml-5 pl-2 pr-2'>
             4 
          </button>
          <p className='paragraph'> Step 4 <br/> <span className='font-medium'>SUMMARY</span></p>

        </div>
      </div>     
      </div>
   )
}


