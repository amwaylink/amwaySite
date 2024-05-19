import { graphql, useStaticQuery } from "gatsby"

const useProductData = () => {
  const data = useStaticQuery(graphql`
    query {
      allProduct {
        nodes {
          sku
          image_url
          product_title
          link
          category
        }
      }
      allBrand {
        nodes {
          brand
          image
          link
        }
      }
    }
  `)

  return {
    products: data.allProduct.nodes,
    brands: data.allBrand.nodes,
  }
}

export default useProductData
