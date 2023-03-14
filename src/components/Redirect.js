import * as React from "react"
import { useEffect, useState } from "react"

const Redirect = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const meta = document.createElement("meta")
    meta.name = "referrer"
    meta.content = "no-referrer nofollow noopener"
    meta.description = "Amway Home Products Nutrilite"
    document.querySelector("head").appendChild(meta)
    const timer = setTimeout(() => {
      setIsLoading(false)
      window.location.href = "https://www.amway.com/share-link/CewU4MDT3"
    }, 3000) // 3 seconds delay
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    // Render a loading component while the delay is happening
    return (
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-red-600">
        <div className="flex flex-row justify-center items-center">
          <div className="rounded-full w-4 h-4 bg-blue-800"></div>
        </div>
      </div>
    )
  } else {
    // Replace the loading component with the redirect component once the delay is over
    return null
  }
}

export default Redirect
