import * as React from "react"
import { useEffect, useRef, useState } from "react"

import PropTypes from "prop-types"

const DotSlider = ({ className, dots = 2, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0) // Current "dot" or segment
  const totalSegments = dots || 4 // Total number of segments or dots
  const containerRef = useRef(null)
  const scrollDistance = useRef(0)
  //const [containerWidth, setContainerWidth] = useState(0) // State to store container width

  //const containerWidth = containerRef.current.offsetWidth

  useEffect(() => {
    // Ensure the component is mounted before attempting to access DOM properties
    if (containerRef.current) {
      const updateMeasurements = () => {
        if (!containerRef?.current) return
        const totalWidth = containerRef.current.scrollWidth
        const visibleWidth = containerRef.current.offsetWidth
        const totalScrollWidth = totalWidth - visibleWidth // The total scrollable width
        const segmentWidth = totalScrollWidth / (totalSegments - 1) // Assuming you want to divide the overflow into 3 segments

        scrollDistance.current = segmentWidth // Update scrollDistance for use in scrolling logic
        //setContainerWidth(visibleWidth) // Update state with current container width
      }
      const updateCurrentIndex = () => {
        if (!containerRef?.current) return
        const totalWidth = containerRef.current.scrollWidth
        const visibleWidth = containerRef.current.offsetWidth
        const totalScrollWidth = totalWidth - visibleWidth // The total scrollable width
        const segmentWidth = totalScrollWidth / (totalSegments - 1) // Assuming you want to divide the overflow into 3 segments; BTW - whyt 3??? it's totalSegments - 1??
        const currentSegment = Math.round(
          containerRef.current.scrollLeft / segmentWidth
        )

        setCurrentIndex(currentSegment)
      }
      updateMeasurements()
      // Optional: Recalculate on window resize
      const currentRef = containerRef.current
      window.addEventListener("resize", updateMeasurements, { passive: true })
      currentRef.addEventListener("scroll", updateCurrentIndex, {
        passive: true,
      })

      // Cleanup listener on component unmount
      return () => {
        window.removeEventListener("resize", updateMeasurements)
        currentRef?.removeEventListener("scroll", updateCurrentIndex)
      }
    }
  }, [children, totalSegments]) // Recalculate when list changes

  // Adjusted scroll functions
  const goToNext = () => {
    const nextIndex = Math.min(currentIndex + 2, totalSegments - 1) // Ensure there are only 4 segments (0 to 3)
    scrollToSegment(nextIndex)
  }

  const goToPrevious = () => {
    const prevIndex = Math.max(currentIndex - 2, 0)
    scrollToSegment(prevIndex)
  }

  const scrollToSegment = index => {
    // Calculate the scroll position for the given segment index
    const newScrollPosition = scrollDistance.current * index
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      })
    }
  }

  // Generate the "dots" for the navigation
  const dotsDivs = Array.from({ length: totalSegments }, (_, i) => i)

  return dots === 1 ? (
    children
  ) : (
    <div
      className={
        className +
        " flex flex-row relative gap-3 justify-center items-center my-5 w-full"
      }
    >
      <button
        className=" text-4xl hidden md:flex aspect-square size-10 border-2 border-gray-400 text-gray-400 hover:text-gray-700 hover:border-gray-700 hover:shadow-md  justify-center items-center rounded-full duration-300 pb-2"
        onClick={goToPrevious}
      >
        &#x2039;
      </button>
      <section
        ref={containerRef}
        className="flex overflow-x-auto overflow-y-hidden scroll-smooth gap-4 xl:gap-12 no-scrollbar w-full md:px-5 snap-x snap-mandatory *:snap-center"
      >
        {children}
      </section>
      <button
        className="text-4xl hidden md:flex aspect-square size-10 border-2 border-gray-400 text-gray-400 hover:text-gray-700 hover:border-gray-700 hover:shadow-md  justify-center items-center rounded-full duration-300 pb-2 "
        onClick={goToNext}
      >
        &#x203A;
      </button>
      <div className="absolute -bottom-6 left-[50%] -translate-x-[50%] flex justify-center space-x-2 p-2 ">
        {dotsDivs.map((dot, index) => (
          <button
            key={dot}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index
                ? "bg-gray-400 md:bg-gray-700"
                : "bg-gray-300 md:bg-gray-400"
            }`}
            onClick={() => scrollToSegment(index)}
            aria-label={`Scroll to segment ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

DotSlider.defaultProps = {
  className: "",
  dots: 4,
}
DotSlider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  dots: PropTypes.number,
}

export default DotSlider
