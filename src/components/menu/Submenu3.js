import React from "react"
import useProductData from "../../hooks/useProductData"

const Submenu3 = () => {
  const { submenu3 } = useProductData()

  // Handle brand link click for Google Ads tracking
  const handleBrandClick = (brand, url) => {
    if (window.gtag) {
      window.gtag("event", "brand_link_click", {
        send_to: "AW-16585635220", // Replace with your Google Ads ID
        event_category: "Brand",
        event_label: brand, // Use the brand name as the label
        value: 1,
        link_destination: url, // Include the URL for tracking
      })
    }
  }

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
              onClick={() => handleBrandClick(item.brand, item.url)} // Trigger tracking on click
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
