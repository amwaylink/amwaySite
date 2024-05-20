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

      <main className="static pt-16 w-full">{children}</main>
      <footer className="bg-gray-300 h-14 flex justify-center items-center text-sm text-gray-700">
        ©Copyright {new Date().getFullYear()}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
