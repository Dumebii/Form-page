import React from "react";
import { useState } from "react";
import Selector from "./Selector";
import { Link } from "react-router-dom";

const Pick = () => {
  const [check, handleCheck] = useState(false);

  function checking() {
    handleCheck(!check);
  }

  return (
    <div className=" lg:bg-white mt-10 lg:ml-[11rem] white-rounding lg:w-[63rem] pick-main">
      <div className="flex">
        <div className="lg:m-3">
          <Selector />
        </div>
        <main className="m-5 pick pick-main-div">
          <div className="m-5">
            <h1 className="text-3xl text-blue-900 font-bold">Pick add-ons</h1>
            <p className="paragraph font-normal text-sm mt-1">
              Add-ons help help improve your gaming experience
            </p>
          </div>
          <div className={`flex options-pick m-6 rounded-md ${check? 'bg-blue-100' : 'bg-white' }`}>
            <input type="checkbox" onChange={checking} className="m-2" />
            <div className="flex m-2">
              <div className="">
                <h4>
                  Online services <br />
                  <span>Access to multi play games</span>
                </h4>
              </div>
              <p className="lg:ml-[10rem] mt-2">+$10/yr</p>
            </div>
          </div>
          <div className={`flex options-pick m-6 rounded-md ${check? 'bg-blue-100' : 'bg-white' }`}>
            <input type="checkbox" onChange={checking} className="m-2" />
            <div className="flex m-2">
              <div>
                <h4>Larger Storage</h4>
                <p>Extra 1TB of cloud save</p>
              </div>
              <p className="lg:ml-[12rem] mt-2">+$20/yr</p>
            </div>
          </div>
          <div className={`flex options-pick m-6 rounded-md ${check? 'bg-blue-100' : 'bg-white' }`} onClick={checking}>
            <input type="checkbox"  className="m-2" />
            <div className="flex m-2">
              <div>
                <h4>Customizable profile</h4>
                <p>Custom theme on your profile</p>
              </div>
              <p className="lg:ml-[9rem] mt-2">+$20/yr</p>
            </div>
          </div>
          <div className="flex mt-20">
            <Link to={`/plan`}>
              <p
                className="ml-10 paragraph
                 rounded-md p-3">
                Go back
              </p>
            </Link>
            <Link to={`/finishingUp`}>
              <button
                className="lg:ml-[25rem] border
                bg-blue-800 font-normal
                rounded-md p-2">
                Next step
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pick;
