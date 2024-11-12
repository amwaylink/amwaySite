import React from "react"

const ProductCard = ({ product }) => {
  const image = `https://www.amway.com${product.image_url}`

  // Handle product click for Google Ads tracking
  const handleProductClick = () => {
    if (window.gtag) {
      window.gtag("event", "product_click", {
        send_to: "AW-16585635220", // Replace with your Google Ads ID
        event_category: "Product",
        event_label: product.product_title,
        value: 1,
        product_category: product.category,
        product_sku: product.sku,
      })
    }
  }

  return (
    <a
      href={product.link}
      rel="noopener noreferrer"
      className="bg-white max-w-[22rem] rounded-xl shadow-lg grid grid-rows-[1fr_auto_auto] sm:grid-rows-[1fr_auto_1fr] w-full aspect-[3/5] sm:aspect-[3/4] overflow-hidden border my-5 group"
      onClick={handleProductClick} // Trigger tracking on click
    >
      <img
        className="w-full aspect-square p-5"
        src={image}
        alt={product.product_title}
      />

      <div className="w-full mb-2 text-gray-600 h-12 line-clamp-2 px-5 text-center">
        {product.product_title}
      </div>

      <div className="border-t h-full flex justify-center items-center group-hover:bg-gray-100 duration-300 ease-in-out font-bold">
        View Product
      </div>
    </a>
  )
}

export default ProductCard
