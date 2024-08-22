import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import { Helmet } from "react-helmet"

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
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="referrer" content="no-referrer" />
      </Helmet>
      <Header className={"static"} siteTitle={data.site.siteMetadata.title} />

      <main className="static pt-16 w-full">{children}</main>
      <footer className="bg-gray-300 flex flex-col p-5 justify-center items-center text-center text-sm text-gray-700">
        <b className="block">
          Become an Amway Independent Business Owner. Register Today!
        </b>
        ©Copyright {new Date().getFullYear()}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
