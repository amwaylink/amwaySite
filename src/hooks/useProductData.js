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
      allSubmenu1 {
        nodes {
          category
          subcategory
          url
        }
      }
      allSubmenu3 {
        nodes {
          brand
          url
        }
      }
    }
  `)

  return {
    products: data.allProduct.nodes,
    brands: data.allBrand.nodes,
    submenu: data.allSubmenu1.nodes,
    submenu3: data.allSubmenu3.nodes,
  }
}

export default useProductData
