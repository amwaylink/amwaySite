const path = require("path")
const fs = require("fs")
const csv = require("csv-parser")

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  const createNodesFromCSV = (filePath, nodeType, idPrefix) => {
    return new Promise((resolve, reject) => {
      const results = []
      fs.createReadStream(path.resolve(__dirname, filePath))
        .pipe(csv())
        .on("data", data => results.push(data))
        .on("end", () => {
          results.forEach(item => {
            createNode({
              ...item,
              id: createNodeId(
                `${idPrefix}-${item.sku || item.brand || item.category}-${
                  item.subcategory || item.brand
                }`
              ),
              internal: {
                type: nodeType,
                contentDigest: createContentDigest(item),
              },
            })
          })
          resolve()
        })
        .on("error", error => reject(error))
    })
  }

  return Promise.all([
    createNodesFromCSV("src/data/products.csv", "Product", "product"),
    createNodesFromCSV("src/data/brands.csv", "Brand", "brand"),
    createNodesFromCSV("src/data/submenu1.csv", "Submenu1", "submenu1"),
    createNodesFromCSV("src/data/submenu3.csv", "Submenu3", "submenu3"),
  ])
}
