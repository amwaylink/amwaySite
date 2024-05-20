import React, { useState } from "react"

const inputClasses =
  "mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-300 focus:border-blue-300"
const labelClasses = "block text-sm font-medium text-gray-700"
const buttonClasses =
  "w-max px-4 py-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    country: "United States",
    language: "English",
    businessParticipants: "no",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted", formData)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-black mb-4">
        SAVE MONEY AND MAKE MONEY WHEN YOU BUY OR SELL AMWAY PRODUCTS
      </h2>

      <h3 className="text-xl font-semibold mb-4">
        BECOME AN AMWAY BUSINESS OWNER AND START YOUR OWN BUSINESS, TODAY!
      </h3>
      <h4 className="text-xl font-semibold mb-4">
        Required Information to Register
      </h4>

      <ul className="list-disc pl-5 mb-6 text-sm">
        <li>
          <b>First and Last Name</b> (Your Name must match your Tax ID Document)
        </li>
        <li>
          <b>Address</b>
        </li>
        <li>
          <b>Date of Birth</b> (18 years or older)
        </li>
        <li>
          <b>TIN</b> (Taxpayer Identification Number)
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="firstName" className={labelClasses}>
            FIRST NAME
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="John"
            className={inputClasses}
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className={labelClasses}>
            LAST NAME
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Smith"
            className={inputClasses}
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className={labelClasses}>
            EMAIL (AMWAY ID)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johnsmith@email.com"
            className={inputClasses}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 text-">
          <label htmlFor="confirmEmail" className={labelClasses}>
            CONFIRM EMAIL (AMWAY ID)
          </label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            placeholder="johnsmith@email.com"
            className={inputClasses}
            value={formData.confirmEmail}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className={labelClasses}>
            COUNTRY OF PRIMARY RESIDENCE
          </label>
          <select
            id="country"
            name="country"
            className={inputClasses}
            value={formData.country}
            onChange={handleChange}
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Dominican Republic</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="language" className={labelClasses}>
            LANGUAGE PREFERENCE
          </label>
          <select
            id="language"
            name="language"
            className={inputClasses}
            value={formData.language}
            onChange={handleChange}
          >
            <option>English</option>
            <option>Spanish</option>
            <option>Simplified Chinese</option>
            <option>Korean</option>
            <option>Russian</option>
          </select>
        </div>
        <i className="block text-sm pb-3">
          * Upon completion of registration, you will receive an email with a
          verified link requesting your Tax ID information in order to complete
          your registration.
        </i>
        <button type="submit" className={buttonClasses}>
          SUBMIT REGISTRATION
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
