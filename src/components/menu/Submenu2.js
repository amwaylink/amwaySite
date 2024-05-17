import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

const Submenu2 = () => {
  return (
    <div className="fixed h-full md:h-auto overflow-y-auto md:absolute top-16 md:left-0 w-full group-hover:block bg-gray-50 border-t min-h-24 duration-500 ease-in-out">
      <div className="w-full fade-in-300 max-w-[1366px] mx-auto px-10 pt-5 pb-24 md:pb-5 text-sm grid grid-cols-1 md:grid-cols-4">
        <h2 className="font-bold text-lg w-full col-span-1 md:col-span-4">
          CATEGORIES
        </h2>
        <Link
          to="/home/nutrilite"
          className="flex flex-col gap-2 py-2 md:py-1 group md:p-2 group"
        >
          <StaticImage
            src="../images/amway-nutrition-products.jpeg"
            alt="Nutrilite"
            className="w-full h-full max-w-[150px] lg:max-w-[200px] group-hover:scale-[102%] duration-300 ease-in-out"
          />
          <b>
            Nutrition
            <ChevronRightIcon className="inline-block w-3 h-3 stroke-2 stroke-black group-hover:translate-x-2 duration-300 ease-in-out" />
          </b>
        </Link>
        <Link
          to="/home/nutrilite"
          className="flex flex-col gap-2 py-2 md:py-1 group md:p-2 group"
        >
          <StaticImage
            src="../images/amway-home-products.jpeg"
            alt="Nutrilite"
            className="w-full h-full max-w-[150px] lg:max-w-[200px] group-hover:scale-[102%] duration-300 ease-in-out"
          />
          <b>
            Home Products
            <ChevronRightIcon className="inline-block w-3 h-3 stroke-2 stroke-black group-hover:translate-x-2 duration-300 ease-in-out" />
          </b>
        </Link>
        <Link
          to="/home/nutrilite"
          className="flex flex-col gap-2 py-2 md:py-1 group md:p-2 group"
        >
          <StaticImage
            src="../images/amway-personal-care.jpeg"
            alt="Nutrilite"
            className="w-full h-full max-w-[150px] lg:max-w-[200px] group-hover:scale-[102%] duration-300 ease-in-out"
          />
          <b>
            Personal Care
            <ChevronRightIcon className="inline-block w-3 h-3 stroke-2 stroke-black group-hover:translate-x-2 duration-300 ease-in-out" />
          </b>
        </Link>
        <Link
          to="/home/nutrilite"
          className="flex flex-col gap-2 py-2 md:py-1 group md:p-2 group"
        >
          <StaticImage
            src="../images/amway-beauty-products.jpeg"
            alt="Nutrilite"
            className="w-full h-full max-w-[150px] lg:max-w-[200px] group-hover:scale-[102%] duration-300 ease-in-out"
          />
          <b>
            Beauty
            <ChevronRightIcon className="inline-block w-3 h-3 stroke-2 stroke-black group-hover:translate-x-2 duration-300 ease-in-out" />
          </b>
        </Link>
      </div>
    </div>
  )
}

export default Submenu2
