import { useState } from "react";

export default function Form() {
    
    const [contact, setContact] = useState({
        fName: "",
        phone: "",
        email: ""
      });
    
      function setSate(event) {
        const { name, value } = event.target;
    
        setContact((prevValue) => {
          return {
            ...prevValue,
            [name]: value
      }});
      }

  return (
    <div className="form">
    <h1 className="text-blue-900 pt-10 mb-8 ml-8 font-bold">
        Personal Info
    </h1>
    <p className="mb-8  mt-3 ml-8 paragraph font-normal">
        Please provide your name, email address and phone number
    </p>
    <div >
    <form className="pl-8">
        <label for='fName'>
            Name
        </label>
        <input
          className="block border mb-8 pl-10 rounded-md w-[30em]"
          name="fName"
          onChange={setSate}
          value={contact.fName}
          placeholder="e.g. Stephen King"
        />
        <label for='email'>
            Email Address
        </label>
        <input
          className="block border mb-8 pl-10 rounded-md w-[30em]"
          name="email"
          onChange={setSate}
          value={contact.email}
          placeholder="e.g. stephenking@lorem.com"
        />
        <label for='phone'>
            Phone Number
        </label>
        <input
          name="phone"
          className="block border mb-8 pl-10 rounded-md w-[30em]"
          onChange={setSate}
          value={contact.phone}
          type="number"
          placeholder="e.g. +23481725545"
        />
        <button className="ml-10 border bg-blue-700 text-white rounded-md p-3">Next step</button>
      </form>  
    </div>
      
    </div>
    )
}