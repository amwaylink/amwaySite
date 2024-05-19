// src/components/BrandSlider.js
import React from "react"
import PropTypes from "prop-types"
import BrandCard from "./BrandCard" // Assuming you have a separate component for brand cards
import DotSlider from "./DotSlider"

const BrandSlider = ({ brands }) => {
  return (
    <DotSlider className="w-11/12 max-w-[1366px] mx-auto" dots={4}>
      {brands.map(brand => (
        <div key={brand.brand}>
          <BrandCard brand={brand} />
        </div>
      ))}
    </DotSlider>
  )
}

BrandSlider.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      brand: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default BrandSlider
