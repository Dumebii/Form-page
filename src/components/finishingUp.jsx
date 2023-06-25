import Selector from "./Selector";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function FinishingUp() {
       const [blink, setBlink] = useState(true)

    
  return (
    <div className=" bg-white mt-10 ml-[11rem] rounded-xl w-[63rem]">
    <div className="flex">
      <div className="m-3">
        <Selector
        blink-prop = {blink}
         />
      </div>
      <main className="ml-20 mt-10">
      <div>
        <h1 className="text-3xl text-blue-900 font-bold">Finishing up</h1>
        <p className="paragraph font-normal text-sm mt-1">
          Double check everything before confirming
        </p>
      </div>
      <div className="bg-blue-100 w-[25rem] ml-1 mt-2">
        <div className="flex m-3 space-x-[13rem] text-blue-900 ">
          <h1 className="text-sm mt-3 font-bold">Arcade (Monthly) 
          <br />
          <Link to={``}>
            <a className="paragraph">
              Change
            </a>
          </Link> </h1> 
          <p className="p-3">$9/mo</p>
        </div>
        <hr className="h-0.5  bg-gray-300"/>
        <div>
            <div className="flex space-x-[14rem]">
              <p className="text-sm paragraph p-3">
              Online services
              </p>
              <span className="paragraph pt-3.5 text-sm">+$1/mo</span></div>
              <div className="flex space-x-[13.5rem]"><p className="paragraph p-3">
              Larger storage
              </p>
              <span className="paragraph text-sm pt-2.5">+$2/mo</span></div>
            </div>
      </div>
      <div className="flex space-x-[14rem]">
        <p className=" paragraph ml-7 text-sm">
              Total per month
        </p>
            <span className="text-1xl text-blue-700 font-bold">+$12/mo</span>
      </div>
      <div className="flex mt-20">
            <Link to={`/plan`}>
              <p
                className="ml-10 paragraph
                 rounded-md p-3">
                Go back
              </p>
            </Link>
            <Link to={``}>
              <button
                className="ml-[15rem] border
              bg-blue-800 font-normal
                rounded-md p-2 hover:bg-blue-300">
                Confirm
              </button>
            </Link>
          </div>
      </main>
    </div>
    </div>
  );
}
