
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/dennislindo/Desktop/dennislindo.com/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/dennislindo/Desktop/dennislindo.com/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/dennislindo/Desktop/dennislindo.com/src/pages/index.js")),
  "component---src-pages-page-2-tsx": preferDefault(require("/Users/dennislindo/Desktop/dennislindo.com/src/pages/page-2.tsx")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/dennislindo/Desktop/dennislindo.com/src/pages/using-typescript.tsx"))
}

