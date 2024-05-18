// gatsby-node.js
const path = require("path")
const fs = require("fs")
const csv = require("csv-parser")

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  return new Promise((resolve, reject) => {
    const results = []
    fs.createReadStream(path.resolve(__dirname, "src/data/products.csv"))
      .pipe(csv())
      .on("data", data => results.push(data))
      .on("end", () => {
        results.forEach(product => {
          createNode({
            ...product,
            id: createNodeId(`product-${product.sku}`),
            internal: {
              type: "Product",
              contentDigest: createContentDigest(product),
            },
          })
        })
        resolve()
      })
      .on("error", error => reject(error))
  })
}
