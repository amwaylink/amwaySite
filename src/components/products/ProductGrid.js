import React, { useState } from "react"
import PropTypes from "prop-types"
import ProductCard from "./ProductCard"

const ProductGrid = ({
  products,
  category,
  currentPage,
  setCurrentPage,
  onProductClick,
}) => {
  const [shuffledProducts] = useState(products)
  const productsPerPage = 12

  const categoryLinks = {
    nutrition: "https://www.amway.com/share-link/r7jVkoptz",
    home: "https://www.amway.com/share-link/U1oIswVV2",
    beauty: "https://www.amway.com/share-link/en4NiYTGh",
    personalCare: "https://www.amway.com/share-link/G4~YojAyr",
    default: "https://www.amway.com/share-link/8P45XUnP7",
  }

  const getHref = () =>
    categoryLinks[category.toLowerCase()] || categoryLinks.default

  let filteredProducts = category
    ? products.filter(product => product.category === category)
    : shuffledProducts

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  const handlePageChange = pageNumber => setCurrentPage(pageNumber)

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-10">
        <p>No products found in the selected category.</p>
      </div>
    )
  }

  return (
    <div className="w-11/12 max-w-[1366px] mx-auto pb-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentProducts.map(product => (
          <div key={product.sku}>
            <ProductCard
              product={product}
              onClick={() =>
                onProductClick(
                  product.product_title,
                  product.category,
                  product.sku
                )
              }
            />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 border-2 border-gray-300 rounded duration-300 ease-in-out ${
                currentPage === index + 1
                  ? "bg-gray-200"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
      <div className="w-full flex justify-center items-center pt-10 ">
        <a
          href={getHref()}
          onClick={e => {
            e.preventDefault()
            onProductClick("Shop All Products", category, "N/A")
            window.location.href = getHref()
          }}
          rel="noopener noreferrer"
          className="w-max px-6 py-3 bg-black uppercase text-white rounded-full"
        >
          {category ? (
            <>SHOP ALL {category} PRODUCTS</>
          ) : (
            "SHOP ALL AMWAY PRODUCTS"
          )}
        </a>
      </div>
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
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  onProductClick: PropTypes.func.isRequired,
}

ProductGrid.defaultProps = {
  category: "",
}

export default ProductGrid
