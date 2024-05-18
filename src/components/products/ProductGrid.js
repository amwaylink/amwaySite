// src/components/ProductGrid.js
import React from "react"
import PropTypes from "prop-types"
import ProductCard from "./ProductCard"

const ProductGrid = ({ products, category }) => {
  let filteredProducts = products

  // Filter products by category if specified
  if (category) {
    filteredProducts = products.filter(product => product.category === category)
  }

  // Limit to 12 products
  filteredProducts = filteredProducts.slice(0, 12)

  return (
    <div
      className="w-11/12 max-w-[1366px] mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      dots={4}
    >
      {filteredProducts.map(product => (
        <div key={product.sku}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

ProductGrid.propTypes = {
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

ProductGrid.defaultProps = {
  category: "",
}

export default ProductGrid
