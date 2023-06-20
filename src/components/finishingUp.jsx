import Selector from "./Selector";
import { Link } from "react-router-dom";

export default function FinishingUp() {
  return (
    <div className=" bg-white mt-10 ml-[11rem] rounded-xl w-[63rem]">
    <div className="flex">
      <div className="m-3">
        <Selector />
      </div>
      <main className="m-10">
      <div>
        <h1 className="text-3xl text-blue-900 font-bold">Finishing up</h1>
        <p className="paragraph font-normal text-sm mt-1">
          Double check everything before confirming
        </p>
      </div>
      <div className="bg-blue-100 w-[25rem] m-6">
        <div className="flex m-3 space-x-[13rem]">
          <h1>Arcade (Monthly) <br/>
          <Link to={``}>
            <span className="paragraph">
              Change
            </span>
          </Link> </h1> 
          <p className="">$9/mo</p>
        </div>
        <hr className="h-0.5  bg-gray-300"/>
        <div>
            <div className="flex space-x-[12rem]"><p className=" paragraph p-3">
              Online services
            </p>
            <span className="paragraph pt-2">+$1/mo</span></div>
            <div className="flex space-x-[12rem]"><p className="paragraph p-3">
              Larger storage
            </p>
            <span className="paragraph">+$2/mo</span></div>
        </div>
      </div>
      <div>
        <p className="ml-10 paragraph rounded-md p-3">
              Total per month
        </p>
            <span>+$12/mo</span>
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
                className="ml-[25rem] border
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
}
