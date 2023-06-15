import Selector from "./Selector";
import { Link } from "react-router-dom";

export default function FinishingUp() {
  return (
    <div>
      <div className="m-3">
        <Selector />
      </div>
      <div>
        <h1 className="text-3xl text-blue-900 font-bold">FInishing up</h1>
        <p className="paragraph font-normal text-sm mt-1">
          Double check everything before confirming
        </p>
      </div>
      <div>
        <div>
          <h1>Arcade (Monthly)</h1>
          <Link to={``}>
            <p className="ml-10 paragraph rounded-md p-3">
              Change
            </p>
          </Link>
        </div>
        <div>
            <p className="ml-10 paragraph rounded-md p-3">
              Online services
            </p>
            <span>+$1/mo</span>
            <p className="ml-10 paragraph rounded-md p-3">
              Larger storage
            </p>
            <span>+$2/mo</span>
        </div>
        <div>
        <p className="ml-10 paragraph rounded-md p-3">
              Total per month
            </p>
            <span>+$12/mo</span>
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
            <Link to={``}>
              <button
                className="ml-[25rem] border
              bg-blue-800 font-normal
                rounded-md p-2">
                Next step
              </button>
            </Link>
          </div>
    </div>
  );
}
