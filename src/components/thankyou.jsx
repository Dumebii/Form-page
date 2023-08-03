import Selector from './Selector'
import ThankYou from './images/icon-thank-you.svg'



export default function Thankyou() {
    return(
        <div className="flex lg:bg-white m-0 lg:m-auto lg:mt-8 lg:w-[63rem] mobile white-rounding">
           <div div className='lg:m-5'><Selector /></div>
           <main className='m-[6rem] mt-[11rem] thank-you'>
           <div>
             <img src={ThankYou} alt='A thank you icon' className='mx-auto thankyou-img' />
             <h1 className='text-3xl text-blue-900 font-bold m-6 pl-[6rem]'>
                Thank you!
             </h1>
             <p className="paragraph font-normal text-md thankyou-text">
                Thanks for confirming your subscription!
                We hope you have <br /> fun using our platform.
                If you need any support, please feel <br/>
               <span className='pl-10 thankyou-text'> free to email us at 
               support@loremgaming.com </span>
             </p> </div>
           </main>
            
        </div>
    )
}