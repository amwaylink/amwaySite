import React, { useEffect } from "react"
import LoadingWithImages from "../components/LoadingWithImages"

const NutritionRedirect = () => {
  useEffect(() => {
    // Delay the redirection by 3 seconds (3000ms)
    const timer = setTimeout(() => {
      window.location.href = "https://amway.com/share-link/r7jVkoptz"
    }, 3000) // 3000ms = 3 seconds

    return () => clearTimeout(timer) // Cleanup if the component unmounts before the delay
  }, [])

  return (
    <div>
      <LoadingWithImages />
    </div>
  )
}

export default NutritionRedirect
