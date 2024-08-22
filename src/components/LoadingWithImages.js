import React, { useEffect, useState } from "react"

const LoadingWithImages = () => {
  // List of images
  const images = [
    "https://www.amway.com/medias/126199-en-US-690px-01?context=bWFzdGVyfGltYWdlc3wyMjM2MTF8aW1hZ2UvcG5nfHN5cy1tYXN0ZXIvaW1hZ2VzL2g1Yy9oZjkvOTUyNjI4MTYwMTA1NC8xMjYxOTktZW4tVVMtNjkwcHgtMDF8ZDdhNTVhMjg3ODJkMTY3NThkNmQzOTJiZWUyNTEyMmRjMTZmODM0YmYwOGNkYjA3NjJmOTJiYzA1MzA4OWMzYw",
    "https://www.amway.com/medias/A0244-en-US-480px-01?context=bWFzdGVyfGltYWdlc3w0MTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2gyOC9oYWMvOTQ0OTg4NTQ2NjY1NC5wbmd8YjBhNjMwNGQ5YTg1YjE4ZDZlYmM2YjJkZWM4MjU5NzdlYmJlNWI1NzM5MDcxMjMyNDBlYjAyMWI1NGYzOWM4Yg",
    "https://www.amway.com/medias/109849-en-US-480px-01?context=bWFzdGVyfGltYWdlc3w2MTEyNXxpbWFnZS9wbmd8aW1hZ2VzL2hiNC9oODYvOTM1NTAwNjc3MTIzMC5wbmd8MDQwY2VlMTU0MmMwNmJkYjM1NTE3ODMyMjE1OGY0YzIyMDliYzk2Yzg3YTg5MDJjODllYTMzZTYwZmMxZjA1MA",
    "https://www.amway.com/medias/118184V-en-US-480px-01?context=bWFzdGVyfGltYWdlc3w2MDU5MHxpbWFnZS9wbmd8aW1hZ2VzL2gwNS9oNDIvOTM1NTIyMDgxMTgwNi5wbmd8ZDRhNTlhNjAzYzUxYjNmOGRhZTdiYzg4MmY0OWI4YTMzOWVkMjY5MDYzOTA5NjNhM2UxYzkzMjliYzZlZjQ2Mg",
    "https://www.amway.com/medias/118120-en-US-480px-01?context=bWFzdGVyfGltYWdlc3w0MTY5N3xpbWFnZS9wbmd8aW1hZ2VzL2g2MC9oYTEvOTM1NTIyMzIzNjYzOC5wbmd8MzVmNWNlNWVkZmZlNmQyYzkxOTY2YjY3NzRjZmQxOTQ0MmQ5OGIxYzExZTFlMWQ4ZWVlNjFlODI2OTE3ODMzYg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeCircle, setActiveCircle] = useState(0) // Controls which circle is currently active

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 1000) // Cycle through images every 1 second

    const circleInterval = setInterval(() => {
      setActiveCircle(prev => (prev + 1) % 3) // Cycle through 0, 1, 2 for the 3 circles
    }, 300) // Change active circle every 300ms

    return () => {
      clearInterval(imageInterval)
      clearInterval(circleInterval)
    } // Cleanup intervals when the component unmounts
  }, [images.length])

  return (
    <div className="flex flex-col items-center justify-center absolute inset-0 space-y-4">
      <img
        src={images[currentImageIndex]}
        alt="Amway products"
        className="w-80 h-80"
      />
      <div className="flex space-x-4">
        <div
          className={`w-6 h-6 rounded-full ${
            activeCircle === 0 ? " scale-125" : " scale-100"
          } transition-all bg-blue-800 duration-300`}
        ></div>
        <div
          className={`w-6 h-6 rounded-full ${
            activeCircle === 1 ? " scale-125" : " scale-100"
          } transition-all bg-blue-800 duration-300`}
        ></div>
        <div
          className={`w-6 h-6 rounded-full ${
            activeCircle === 2 ? " scale-125" : " scale-100"
          } transition-all bg-blue-800 duration-300`}
        ></div>
      </div>
    </div>
  )
}

export default LoadingWithImages
