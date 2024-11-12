import React from "react"
import { Link } from "gatsby"

const MenuLink = ({ to, children, ...props }) => {
  // Handle menu link click for Google Ads tracking
  const handleLinkClick = () => {
    if (window.gtag) {
      window.gtag("event", "menu_link_click", {
        send_to: "AW-16585635220", // Replace with your Google Ads ID
        event_category: "Navigation",
        event_label: children, // Use the link text as the label
        value: 1,
        link_destination: to, // Include the destination URL
      })
    }
  }

  return (
    <Link
      to={to}
      {...props}
      onClick={handleLinkClick} // Trigger tracking on click
      className="group uppercase flex items-center justify-center h-16 border-b md:border-b-2 border-b-transparent hover:border-b-gray-300 md:hover:border-b-black px-5 duration-200 bg-white"
    >
      {children}
    </Link>
  )
}

export default MenuLink
