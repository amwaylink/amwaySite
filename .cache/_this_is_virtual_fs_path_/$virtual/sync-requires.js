
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/graphx3/Desktop/amwaySite-1/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/graphx3/Desktop/amwaySite-1/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/graphx3/Desktop/amwaySite-1/src/pages/page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/Users/graphx3/Desktop/amwaySite-1/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/graphx3/Desktop/amwaySite-1/src/pages/using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("/Users/graphx3/Desktop/amwaySite-1/src/templates/using-dsg.js"))
}

