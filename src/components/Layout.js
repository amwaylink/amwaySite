/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen bg-red-200">
      <Header />
      <navbar className="bg-red-200 h-10 w-full">test</navbar>
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
