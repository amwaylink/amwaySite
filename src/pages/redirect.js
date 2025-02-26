import React, { useEffect } from "react"
import LoadingDots from "../components/LoadingDots"

const RedirectPage = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const url = params.get("url")

    if (url) {
      // Timeout for smooth transition
      setTimeout(() => {
        // Perform redirect without passing referrer
        window.location.replace(url)
      }, 100) // Short delay before redirection
    }
  }, [])

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <LoadingDots />
    </div>
  )
}

export default RedirectPage
