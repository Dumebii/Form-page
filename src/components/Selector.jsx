import '../index.css';


export default function Selector() {
   return(
    <div className="background">
      <h1>
        We are trying, to the absolute glory of our Lord Jesus!!
      </h1>
      <div className='flex mb-7'>
        <button className='rounded-full mr-5 ml-5'>
            1
        </button>
        <p> Step 1 <br/> <span className='mt-8'>YOUR INFO</span></p>
      </div>
      <div className='flex mb-7'>
        <button className='rounded-full mr-5 ml-5'>
            2
        </button>
        <p> Step 2 <br/> <span>SELECT PLAN</span></p>
      </div>
      <div className='flex mb-7'>
        <button className='rounded-full mr-5 ml-5'>
            3
        </button>
        <p> Step 3 <br/> <span>ADD-ONS</span></p>
      </div>
      <div className='flex mb-7'>
        <button className='rounded-full mr-5 ml-5'>
            4
        </button>
        <p> Step 4 <br/> <span>SUMMARY</span></p>
      </div>
    </div>

   )
}


