import * as React from "react"
import { useEffect } from "react"

const Redirect = () => {
  useEffect(() => {
    const meta = document.createElement("meta")
    meta.name = "referrer"
    meta.content = "no-referrer"
    document.querySelector("head").appendChild(meta)
    window.location.href = "https://www.amway.com/share-link/kgFZNL1jM"
  }, [])

  return null
}

export default Redirect
