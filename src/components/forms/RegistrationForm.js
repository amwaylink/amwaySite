import React, { useState } from "react"
import emailjs from "emailjs-com"
import { ArrowPathIcon } from "@heroicons/react/24/solid"

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
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [isFading, setIsFading] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.confirmEmail ||
      !formData.country ||
      !formData.language
    ) {
      setMessage(getMessage("required", formData.language))
      return
    }

    // Validate email match
    if (formData.email !== formData.confirmEmail) {
      setMessage(getMessage("mismatch", formData.language))
      return
    }

    setIsSubmitting(true)
    setMessage(getMessage("sending", formData.language))

    // Prepare the email data
    const emailData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      confirmEmail: formData.confirmEmail,
      country: formData.country,
      language: formData.language,
    }

    emailjs
      .send(
        process.env.GATSBY_EMAILJS_SERVICE_ID,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID,
        emailData,
        process.env.GATSBY_EMAILJS_USER_ID
      )
      .then(
        response => {
          setMessage(getMessage("success", formData.language))
          setTimeout(() => {
            setIsFading(true)
            setTimeout(() => {
              setIsSubmitting(false)
              setIsFading(false)
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                confirmEmail: "",
                country: "United States",
                language: "English",
              })
            }, 1000)
          }, 5000)
        },
        error => {
          console.log("FAILED...", error)
        }
      )
  }

  const getMessage = (type, language) => {
    const messages = {
      sending: {
        English: "The registration form is being sent",
        Spanish: "El formulario de registro está siendo enviado",
        "Simplified Chinese": "注册表正在发送",
        Korean: "등록 양식이 전송 중입니다",
        Russian: "Регистрационная форма отправляется",
      },
      success: {
        English: "Registration Request Submitted",
        Spanish: "Solicitud de registro enviada",
        "Simplified Chinese": "注册请求已提交",
        Korean: "등록 요청이 제출되었습니다",
        Russian: "Запрос на регистрацию отправлен",
      },
      mismatch: {
        English: "Emails do not match",
        Spanish: "Los correos electrónicos no coinciden",
        "Simplified Chinese": "电子邮件不匹配",
        Korean: "이메일이 일치하지 않습니다",
        Russian: "Электронные письма не совпадают",
      },
      required: {
        English: "All fields are required",
        Spanish: "Todos los campos son obligatorios",
        "Simplified Chinese": "所有字段都是必填的",
        Korean: "모든 필드는 필수입니다",
        Russian: "Все поля обязательны для заполнения",
      },
    }
    return messages[type][language]
  }

  return (
    <div className="relative max-w-4xl mx-auto p-6 bg-white rounded-lg">
      {isSubmitting && (
        <div
          className={`absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-1000 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="text-center">
            <p className="text-2xl font-bold flex flex-col gap-4 text-gray-700">
              {message === getMessage("sending", formData.language) && (
                <ArrowPathIcon className="animate-spin h-10 w-10 mx-auto" />
              )}
              {message}
            </p>
          </div>
        </div>
      )}
      <h2 className="text-2xl font-black mb-4">
        SAVE MONEY AND MAKE MONEY WHEN YOU BUY OR SELL AMWAY PRODUCTS
      </h2>

      <h3 className="text-xl font-semibold mb-4">
        BECOME AN AMWAY BUSINESS OWNER AND START YOUR OWN BUSINESS, TODAY!
      </h3>
      <h4 className="text-xl font-semibold mb-4">
        Required Information to Register
      </h4>

      <ul className="list-disc pl-5 mb-6 text-sm text-[#CD853F]">
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
            required
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
            required
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
            required
          />
        </div>
        <div className="mb-4">
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
            required
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
            required
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
            required
          >
            <option>English</option>
            <option>Spanish</option>
            <option>Simplified Chinese</option>
            <option>Korean</option>
            <option>Russian</option>
          </select>
        </div>
        <i className="block text-sm pb-3">
          * Upon submitting the form, you will receive an email with a
          verification link to complete your registration as an Amway
          Independent Business Owner (IBO).
        </i>
        <button type="submit" className={buttonClasses}>
          SUBMIT REGISTRATION
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
