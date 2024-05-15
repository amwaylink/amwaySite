import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen">
      <Header />

      <main className="w-11/12 max-w-[1366px] mx-auto py-5">{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
