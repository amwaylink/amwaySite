// src/components/ProductSlider.js
import React from "react"
import PropTypes from "prop-types"
import ProductCard from "./ProductCard"
import DotSlider from "./DotSlider"

const ProductSlider = ({ products, category }) => {
  let filteredProducts = products

  // Filter products by category if specified
  if (category) {
    filteredProducts = products.filter(product => product.category === category)
  }

  // Limit to 12 products
  filteredProducts = filteredProducts.slice(0, 12)

  return (
    <DotSlider className="w-11/12 max-w-[1366px] mx-auto" dots={4}>
      {filteredProducts.map(product => (
        <div key={product.sku}>
          <ProductCard product={product} />
        </div>
      ))}
    </DotSlider>
  )
}

ProductSlider.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      sku: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
      product_title: PropTypes.string.isRequired,
      product_price: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired,
      category: PropTypes.string,
    })
  ).isRequired,
  category: PropTypes.string,
}

ProductSlider.defaultProps = {
  category: "",
}

export default ProductSlider
