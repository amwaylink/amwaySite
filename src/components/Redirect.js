import * as React from "react"
import { useEffect } from "react"

const Redirect = () => {
  useEffect(() => {
    const meta = document.createElement("meta")
    meta.name = "referrer"
    meta.content = "no-referrer nofollow noopener"
    meta.description = "Amway Home Products Nutrilite"
    document.querySelector("head").appendChild(meta)
    window.location.href = "https://www.amway.com/en_US/myshop/vidal"
  }, [])

  return null
}

export default Redirect
