/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header className={"static"} siteTitle={data.site.siteMetadata.title} />

      <main className="static w-full max-w-[1366px] mx-auto">{children}</main>
      <footer className="bg-gray-100 h-14 flex justify-center items-center text-sm text-gray-700">
        ©Copyright {new Date().getFullYear()}, Amway Link
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
