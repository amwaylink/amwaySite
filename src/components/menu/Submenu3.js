import React from "react"
import useProductData from "../../hooks/useProductData"

const Submenu3 = () => {
  const { submenu3 } = useProductData()

  return (
    <div className="z-10 fixed h-full md:h-auto overflow-y-auto md:absolute top-16 md:left-0 w-full group-hover:block bg-gray-50 border-t min-h-24 duration-500 ease-in-out">
      <div className="w-full fade-in-300 max-w-[1366px] mx-auto px-10 pt-5 pb-24 md:pb-5 text-sm">
        <h2 className="font-bold text-lg">Brands</h2>
        <div className="columns-1 md:columns-2 lg:columns-4 gap-4">
          {submenu3.map(item => (
            <a
              key={item.brand}
              href={item.url}
              rel="noopener noreferrer"
              className="block py-2 md:py-1 hover:bg-gray-100"
            >
              {item.brand}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Submenu3
