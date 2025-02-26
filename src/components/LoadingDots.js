import React, { useEffect, useState } from "react"

const LoadingDots = () => {
  const [activeCircle, setActiveCircle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCircle(prev => (prev + 1) % 3) // Cycle through 0, 1, 2
    }, 200) // Change every 500ms

    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [])

  return (
    <div className="flex flex-col items-center justify-center absolute inset-0 space-y-4">
      <div className="flex space-x-4">
        {[0, 1, 2].map(index => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full transition-all duration-300 bg-blue-800 ${
              activeCircle === index ? "scale-125" : "scale-100 opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default LoadingDots
