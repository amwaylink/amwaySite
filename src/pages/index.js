import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BrandSlider from "../components/products/BrandSlider"
import ProductGrid from "../components/products/ProductGrid"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import useProductData from "../hooks/useProductData"
import RegistrationForm from "../components/forms/RegistrationForm"

const IndexPage = ({ data }) => {
  const { products, brands } = useProductData()
  const [category, setCategory] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const handleHashChange = () => {
      const newCategory = window.location.hash.replace("#", "")
      setCategory(newCategory)
      setCurrentPage(1) // Reset to the first page
    }

    // Set the category on component mount
    handleHashChange()

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const handleCategoryChange = newCategory => {
    setCategory(newCategory)
    setCurrentPage(1) // Reset to the first page
    window.location.hash = newCategory
  }

  return (
    <Layout>
      <SEO title="Home" />

      <div className="flex flex-col md:flex-row bg-amber-100 lg:max-h-96 w-full max-w-[1366px] mx-auto">
        <div className="w-full md:w-1/2">
          <StaticImage
            src="../images/amway-nutrition-products.jpeg"
            alt="Nutrilite"
            className="w-full h-full aspect-square"
            imgStyle={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4 gap-3 xl:px-20">
          <h2 className="text-3xl lg:text-2xl font-black text-green-800">
            SAVE MONEY AND MAKE MONEY
          </h2>
          <p>
            Be in business for yourself, but never by yourself! Set your own
            pace to earn extra income—with Amway's free education courses and
            the support of fellow business owners.
          </p>
          <button className="bg-green-800 hover:bg-green-700 text-white max-w-max px-6 py-3 rounded-full mx-auto lg:mx-0">
            START YOUR BUSINESS
          </button>
        </div>
      </div>
      <div>
        <div className="flex flex-col w-11/12 mx-auto max-w-[1366px]">
          <h2 className="text-3xl lg:text-2xl font-black py-5 ">
            CHOOSE CATEGORY
          </h2>
          <div className="flex flex-col md:flex-row gap-4 *:uppercase *:font-bold">
            <button
              onClick={() => handleCategoryChange("nutrition")}
              className="border-2 border-lime-600 text-lime-700 hover:bg-lime-100 duration-300 ease-in-out w-11/12 md:max-w-max px-6 py-3 rounded-full mx-auto lg:mx-0"
            >
              nutrition
            </button>
            <button
              onClick={() => handleCategoryChange("beauty")}
              className="border-2 border-pink-500 text-pink-600 hover:bg-pink-100 duration-300 ease-in-out w-11/12 md:max-w-max px-6 py-3 rounded-full mx-auto lg:mx-0"
            >
              beauty
            </button>
            <button
              onClick={() => handleCategoryChange("home-products")}
              className="border-2 border-gray-400 text-gray-500 hover:bg-gray-100 duration-300 ease-in-out w-11/12 md:max-w-max px-6 py-3 rounded-full mx-auto lg:mx-0"
            >
              home
            </button>
            <button
              onClick={() => handleCategoryChange("personal-care")}
              className="border-2 border-blue-300 text-blue-500 hover:bg-blue-50 duration-300 ease-in-out w-11/12 md:max-w-max px-6 py-3 rounded-full mx-auto lg:mx-0"
            >
              personal care
            </button>
          </div>
        </div>
        <ProductGrid
          products={products}
          category={category}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="w-full py-5 bg-gray-100 px-8">
        <BrandSlider brands={brands} category={category} />
      </div>
      <div className="w-full max-w-[600px] mx-auto py-10 lg:py-20">
        <RegistrationForm />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allProduct {
      nodes {
        sku
        image_url
        product_title
        link
        category
      }
    }
  }
`
