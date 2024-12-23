import React from "react"
import useProductData from "../../hooks/useProductData"

const Submenu1 = () => {
  const { submenu } = useProductData()

  // Group data by category
  const groupedData = submenu.reduce((acc, item) => {
    ;(acc[item.category] = acc[item.category] || []).push(item)
    return acc
  }, {})

  // Handle submenu link click for Google Ads tracking
  const handleSubmenuClick = (subcategory, url) => {
    if (window.gtag) {
      window.gtag("event", "submenu_link_click", {
        send_to: "AW-16585635220", // Replace with your Google Ads ID
        event_category: "Submenu",
        event_label: subcategory, // Use the subcategory as the label
        value: 1,
        link_destination: url, // Include the URL for tracking
      })
    }
  }

  return (
    <div className="z-10 fixed h-full md:h-auto overflow-y-auto md:absolute top-16 md:left-0 w-full group-hover:block bg-gray-50 border-t min-h-24 duration-500 ease-in-out">
      <div className="w-full fade-in-300 max-w-[1366px] mx-auto px-10 pt-5 pb-24 md:pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        {Object.keys(groupedData).map(category => (
          <div key={category}>
            <h2 className="font-bold text-lg">{category}</h2>
            {groupedData[category].map(subItem => (
              <a
                key={subItem.subcategory}
                href={subItem.url}
                rel="noopener noreferrer"
                className="block py-2 md:py-1 hover:bg-gray-100"
                onClick={() =>
                  handleSubmenuClick(subItem.subcategory, subItem.url)
                } // Trigger tracking on click
              >
                {subItem.subcategory}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Submenu1
