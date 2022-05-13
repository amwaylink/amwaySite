import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import '../styles/globals.css'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
<>
<SEO title="Home" />
    <section className="mt-0 h-[70vh] intro-title">      
      <div className="line1 hover:bg-white"></div>
      <div className="line2 hover:bg-white group">
      <div className="line2a group-hover:bg-white"></div>
      </div>

      <div className="line3 hover:bg-white group">
        <div className="line-top group-hover:bg-white"></div>
      <div className="line4 group-hover:bg-white"></div>
      </div>
          
      <div className="line5 hover:bg-white group">
        <div className="line-top group-hover:bg-white"></div> 
        <div className="line6 group-hover:bg-white">
        <div className="line-bottom group-hover:bg-white"></div>
      </div>       
      </div>
      
      <div className="line7 group hover:bg-white">
        <div className="line-top group-hover:bg-white"></div>
        <div className="line8 group-hover:bg-white">
        <div className="line-bottom group-hover:bg-white"></div>
        </div>  
      </div>
      
          

      </section>
      <h1 className="fade-in text-center py-5 font-extralight text-2xl tracking-wider">GRAPHIC DESIGNER AND MARKETING EXPERT</h1>
  </>
)

export default IndexPage
