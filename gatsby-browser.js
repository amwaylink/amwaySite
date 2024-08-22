/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import "./src/styles/globals.css"
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      async
      key="google-gtag"
      src="https://www.googletagmanager.com/gtag/js?id=AW-16585635220"
    />,
    <script
      key="google-gtag-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16585635220');
        `,
      }}
    />,
  ])
}
