import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className=" flex flex-col md:flex-row bg-amber-100 lg:max-h-96 ">
      <div className="w-full md:w-1/2 ">
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
        Be in business for yourself, but never by yourself! Set your own pace to
        earn extra income—with Amway's free education courses and the support of
        fellow business owners.
        <button className="bg-green-800 hover:bg-green-700 text-white max-w-max px-6 py-3 rounded-full mx-auto lg:mx-0">
          START YOUR BUSINESS
        </button>
      </div>
    </div>
    <div>Recommended for you product grid</div>
    <div>Brand Slider</div>
  </Layout>
)

export default IndexPage
