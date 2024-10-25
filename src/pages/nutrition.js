import React, { useEffect } from "react"
import LoadingWithImages from "../components/LoadingWithImages"

const NutritionRedirect = () => {
  useEffect(() => {
    // Delay the redirection by 3 seconds (3000ms)
    const timer = setTimeout(() => {
      window.location.href = "https://www.amway.com/share-link/C777bG-LN"
    }, 500) // 500ms = .5 second

    return () => clearTimeout(timer) // Cleanup if the component unmounts before the delay
  }, [])

  return (
    <div>
      <LoadingWithImages />
    </div>
  )
}

export default NutritionRedirect
