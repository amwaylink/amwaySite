import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import ProductCard from "./ProductCard"

const ProductGrid = ({ products, category, currentPage, setCurrentPage }) => {
  const [shuffledProducts, setShuffledProducts] = useState([])
  const productsPerPage = 12

  const getHref = () => {
    switch (category.toLowerCase()) {
      case "nutrition":
        return "https://amway.com/share-link/r7jVkoptz"
      case "home":
        return "https://amway.com/share-link/U1oIswVV2"
      case "beauty":
        return "https://amway.com/share-link/en4NiYTGh"
      case "personal-care":
        return "https://amway.com/share-link/G4~YojAyr"
      default:
        return "https://amway.com/share-link/8P45XUnP7"
    }
  }

  useEffect(() => {
    if (!category) {
      setShuffledProducts(products)
    }
  }, [category, products])

  let filteredProducts = products

  // Filter products by category if specified
  if (category) {
    filteredProducts = products.filter(product => product.category === category)
  } else {
    filteredProducts = shuffledProducts
  }

  // Calculate the products to display for the current page
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  )

  // Handle page change
  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
  }

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <div className="w-11/12 max-w-[1366px] mx-auto pb-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {currentProducts.map(product => (
          <div key={product.sku}>
            <ProductCard product={product} />
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
}

ProductGrid.defaultProps = {
  category: "",
}

export default ProductGrid
