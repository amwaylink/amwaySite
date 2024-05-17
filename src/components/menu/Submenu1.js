import React from "react"
import { Link } from "gatsby"

const Submenu1 = () => {
  return (
    <div className="z-10 fixed h-full md:h-auto overflow-y-auto md:absolute top-16 md:left-0 w-full group-hover:block bg-gray-50 border-t min-h-24 duration-500 ease-in-out">
      <div className="w-full fade-in-300 max-w-[1366px] mx-auto px-10 pt-5 pb-24 md:pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        <div>
          <h2 className="font-bold text-lg">NUTRITION</h2>
          <Link
            to="/nutrition/vitamins-supplements"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Vitamins & Supplements
          </Link>
          <Link
            to="/nutrition/energy-drinks"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Energy Drinks
          </Link>
          <Link
            to="/nutrition/weight-management"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Weight Management
          </Link>
          <Link
            to="/nutrition/sports-nutrition"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Sports Nutrition
          </Link>
          <Link
            to="/nutrition/shop-all"
            className="block py-1 font-bold hover:bg-gray-100"
          >
            Shop All Nutrition
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-lg">HOME</h2>
          <Link
            to="/home/surface-cleaners"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Surface Cleaners
          </Link>
          <Link
            to="/home/dish"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Dish
          </Link>
          <Link
            to="/home/laundry"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Laundry
          </Link>
          <Link
            to="/home/water-treatment"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Water Treatment
          </Link>
          <Link
            to="/home/cookware"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Cookware
          </Link>
          <Link
            to="/home/air-treatment"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Air Treatment
          </Link>
          <Link
            to="/home/shop-all"
            className="block py-1 font-bold hover:bg-gray-100"
          >
            Shop All Home
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-lg">PERSONAL CARE</h2>
          <Link
            to="/personal-care/bath-body"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Bath & Body Care
          </Link>
          <Link
            to="/personal-care/hair-care"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Hair Care
          </Link>
          <Link
            to="/personal-care/oral-care"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Oral Care
          </Link>
          <Link
            to="/personal-care/shop-all"
            className="block py-1 font-bold hover:bg-gray-100"
          >
            Shop All Personal Care
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-lg">BEAUTY</h2>
          <Link
            to="/beauty/skin-care"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Skin Care
          </Link>
          <Link
            to="/beauty/makeup"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Makeup
          </Link>
          <Link
            to="/beauty/fragrance"
            className="block py-2 md:py-1 hover:bg-gray-100"
          >
            Fragrance
          </Link>
          <Link
            to="/beauty/shop-all"
            className="block py-1 font-bold hover:bg-gray-100"
          >
            Shop All Beauty
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Submenu1
