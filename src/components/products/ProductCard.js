// src/components/ProductCard.js
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

const ProductCard = ({ product }) => {
  return (
    <button className="bg-white max-w-[22rem] rounded-xl shadow-lg grid grid-rows-[1fr_auto_1fr] w-full aspect-[3/4] overflow-hidden border my-5 group">
      <img
        className="w-full aspect-square p-5"
        src={product.image_url}
        alt={product.product_title}
      />

      <div className="w-full mb-2 text-gray-600 h-12 line-clamp-2 px-5 text-center">
        {product.product_title}
      </div>

      <a
        href={product.link}
        className="border-t h-full flex justify-center items-center group-hover:bg-gray-100 duration-300 ease-in-out font-bold"
      >
        View Product
      </a>
    </button>
  )
}

export default ProductCard
