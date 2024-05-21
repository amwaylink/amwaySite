import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Logo from "./Logo"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Submenu1 from "../components/menu/Submenu1"
import Submenu2 from "../components/menu/Submenu2"
import Submenu3 from "../components/menu/Submenu3"

const MenuLink = ({ to, children, ...props }) => (
  <Link
    to={to}
    {...props}
    className="group uppercase flex items-center justify-center h-16 border-b md:border-b-2 border-b-transparent hover:border-b-gray-300 md:hover:border-b-black px-5 duration-200 bg-white"
  >
    {children}
  </Link>
)

const Header = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(0)
  const handleClick = () => {
    setMenuOpen(menuOpen => !menuOpen)
    setShowSubMenu(0)
  }

  return (
    <header
      onMouseLeave={() => setShowSubMenu(0)}
      className={"fixed w-full z-10 h-16 bg-white shadow-md " + className}
    >
      <div className="relative z-20 w-11/12 max-w-[1366px] mx-auto flex flex-row items-center justify-between">
        <Logo />

        <button
          onClick={handleClick}
          className={`${
            menuOpen === false ? "" : "fixed right-[4.16666vw]"
          } h-16 w-full flex items-center justify-end md:hidden z-20`}
        >
          MENU{" "}
          <div
            className={`${
              menuOpen === false ? "rotate-0 " : "rotate-90 "
            } duration-300 text-red-700`}
          >
            {menuOpen === false ? (
              <Bars3Icon className="size-5" />
            ) : (
              <XMarkIcon className="size-5" />
            )}
          </div>
        </button>
        <div
          className={`${
            menuOpen ? "right-0 " : "-right-48 "
          } fixed h-full pt-16 md:pt-0 top-0 bg-white md:static flex flex-col md:flex-row duration-300 ease-in-out z-10`}
        >
          <MenuLink
            to="/"
            className="uppercase"
            onMouseEnter={() => setShowSubMenu(1)}
            onClick={() => setShowSubMenu(1)}
          >
            PRODUCTS
          </MenuLink>

          <MenuLink
            to="/"
            className="uppercase"
            onMouseEnter={() => setShowSubMenu(2)}
          >
            Categories
          </MenuLink>
          <MenuLink
            to="/"
            className="uppercase"
            onMouseEnter={() => setShowSubMenu(3)}
          >
            Brands
          </MenuLink>
          <MenuLink to="/" className="uppercase">
            Register
          </MenuLink>
        </div>
      </div>

      {showSubMenu === 1 && <Submenu1 />}
      {showSubMenu === 2 && <Submenu2 />}
      {showSubMenu === 3 && <Submenu3 />}
    </header>
  )
}

export default Header
