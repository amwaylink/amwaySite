import React, { useEffect } from "react"
import LoadingWithImages from "../components/LoadingWithImages"

const CanadaRedirect = () => {
  useEffect(() => {
    const url =
      "https://www.amway.ca/myshop/inventory?utm_source=copy&utm_medium=sharebar&utm_campaign=us_en_6419293_4281828&utm_content=myshop"

    // Add a 500ms delay before redirecting
    const timer = setTimeout(() => {
      const a = document.createElement("a")
      a.href = url
      a.rel = "noopener noreferrer"
      a.target = "_self" // Opens in the same tab, ensuring no referrer is passed
      document.body.appendChild(a)
      a.click()
    }, 500) // 500ms delay

    return () => clearTimeout(timer) // Cleanup function in case component unmounts
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <LoadingWithImages />
      <p>Redirecting in 0.5 seconds...</p>
    </div>
  )
}

export default CanadaRedirect
