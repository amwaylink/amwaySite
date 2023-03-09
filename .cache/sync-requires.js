
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/dlindo/Desktop/amwaySite/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/dlindo/Desktop/amwaySite/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/dlindo/Desktop/amwaySite/src/pages/index.js")),
  "component---src-pages-page-2-tsx": preferDefault(require("/Users/dlindo/Desktop/amwaySite/src/pages/page-2.tsx")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/dlindo/Desktop/amwaySite/src/pages/using-typescript.tsx"))
}

