import Selector from './Selector'
import ThankYou from './images/icon-thank-you.svg'



export default function Thankyou() {
    return(
        <div className='flex lg:bg-white lg:mt-10 lg:ml-[11rem] lg:w-[63rem] w-[17rem] mobile'>
           <div div className='m-5'><Selector /></div>
           <main className='lg:m-[10rem] relative bottom-[6rem] left-[3rem] bg-white'>
             <img src={ThankYou} alt='A thank you icon' className='lg:mx-auto ml-[7rem]' />
             <h1 className='text-3xl text-blue-900 font-bold mt-7 mb-7 ;g:ml-[7rem]'>
                Thank you!
             </h1>
             <p className="paragraph font-normal text-sm mt-1 md:ml-7">
                Thanks for confirming your subscription! <br className='lg:hidden' />
                We hope you have fun using our <br className='lg:hidden' /> platform.
                If you need any support, <br className='lg:hidden' /> please feel free to email us at <br className='lg:hidden' /> support@loremgaming.com
             </p>
           </main>
            
        </div>
    )
}