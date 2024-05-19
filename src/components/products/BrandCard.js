// src/components/BrandCard.js
import React from "react"
import PropTypes from "prop-types"

const BrandCard = ({ brand }) => {
  return (
    <a
      href={brand.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white max-w-[22rem] w-full aspect-square"
    >
      <img
        src={brand.image}
        alt={brand.brand}
        className="w-full h-full min-w-36"
      />
    </a>
  )
}

BrandCard.propTypes = {
  brand: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}

export default BrandCard
