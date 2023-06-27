import { Link } from "react-router-dom";
import { useState } from "react";

export default function Form() {
  const [contact, setContact] = useState({
    fName: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    fName: "",
    email: "",
    phone: "",
  });

  function setSate(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (contact.fName.trim() === '') {
      errors.name = 'This field is required';
    }

    if (contact.email.trim() === '') {
      errors.email = 'This field is required';
    }

    if (contact.phone.trim() === '') {
      errors.password = 'This field is required';
    }

    if (Object.keys(errors).length === 0) {
      // Perform form submission logic here
      console.log('Form submitted:', contact);
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="form">
      <h1 className="text-blue-900 pt-10 mb-8 ml-8 font-bold">Personal Info</h1>
      <p className="mb-8  mt-3 ml-8 paragraph font-normal">
        Please provide your name, email address and phone number
      </p>
      <div>
        <form className="pl-8" onSubmit={handleSubmit}>
          <label htmlFor="fName">Name</label>
          <input
            className="block border mb-8 pl-10 rounded-md w-[30em]"
            name="fName"
            onChange={setSate}
            value={contact.fName}
            placeholder="e.g. Stephen King"
            required
          />
          {formErrors.fName && <span>{formErrors.name}</span>}
          <label htmlFor="email">Email Address</label>
          <input
            className="block border mb-8 pl-10 rounded-md w-[30em]"
            name="email"
            onChange={setSate}
            value={contact.email}
            placeholder="e.g. stephenking@lorem.com"
            required
          />
          {formErrors.email && <span>{formErrors.email}</span>}
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phone"
            className="block border mb-8 pl-10 rounded-md w-[30em]"
            onChange={setSate}
            value={contact.phone}
            type="number"
            placeholder="e.g. +23481725545"
            required
          />
          {formErrors.phone && <span>{formErrors.phone}</span>}
          <Link to={`plan`}>
            <button
              className="ml-[24rem] border mt-5 form-button text-white
        rounded-md p-2"
              type="submit">
              Next step
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
