import React, { useEffect } from "react"
import LoadingDots from "../components/LoadingDots"

const CanadaRedirect = () => {
  useEffect(() => {
    const url =
      "https://www.amway.ca/myshop/inventory?utm_source=copy&utm_medium=sharebar&utm_campaign=us_en_6419293_4281828&utm_content=myshop"

    // Use an anchor element to enforce noreferrer/noopener
    const a = document.createElement("a")
    a.href = url
    a.rel = "noopener noreferrer"
    a.target = "_self" // Ensures same tab, removing referrer
    document.body.appendChild(a)
    a.click()
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <LoadingDots />
    </div>
  )
}

export default CanadaRedirect
