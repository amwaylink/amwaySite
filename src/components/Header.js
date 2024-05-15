import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Bars3Icon, IconBar3, XMarkIcon } from "@heroicons/react/24/solid"

const MenuLink = ({ to, children }) => (
  <Link
    to={to}
    className="group uppercase flex items-center justify-center h-16 border-b-2 border-b-transparent hover:border-b-black px-5 duration-200 bg-white"
  >
    {children}
  </Link>
)

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(0)
  const handleClick = () => {
    setMenuOpen((menuOpen) => !menuOpen)
    setShowSubMenu(0)
  }

  return (
    <header className=" h-16 bg-white shadow-xl">
      <div className="relative w-11/12 max-w-[1366px] mx-auto flex flex-row items-center justify-between  ">
        <div className="h-16 aspect-[160/56] flex flex-row justify-center items-center text-sky-900">
          <svg
            className="fill-current w-auto h-auto"
            viewBox="0 0 160 56"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M0,55.6921182 C0,55.6921182 91.7867318,33.4058567 159.790686,49.1067747 L160,48.3811149 C160,48.3811149 100.662442,31.0618299 1.1388259,52.1603695 L0,55.6921182 Z"
              id="Fill-1"
            ></path>
            <path
              d="M43.9614365,11.3259705 L43.9614365,15.0247207 C44.296195,14.2842033 44.7248397,13.280476 45.8691749,12.3304651 C47.1089354,11.2737889 48.9204788,10.6921182 50.6850791,10.6921182 C51.5908508,10.6921182 52.497392,10.850965 53.4031637,11.1671237 C56.2166738,12.2253346 57.0270201,14.44305 57.3602394,15.3938284 C59.554254,11.3259705 63.0349722,10.7458345 64.8942283,10.7458345 C67.1828987,10.7458345 69.1852929,11.5914824 70.5212484,12.9113684 C72.9045746,15.2365164 73,17.7703905 73,24.1104475 L73,38.6921182 L65.9908508,38.6921182 L65.9908508,25.7487944 C65.9908508,21.363243 65.896195,20.4654136 65.1805045,19.3036069 C64.4171013,18.0359025 63.3204788,17.7703905 62.271569,17.7703905 C60.3646003,17.7703905 59.4111159,19.1447602 59.2679778,19.3565558 C58.5045746,20.6772092 58.5045746,22.9486409 58.5045746,25.1671237 L58.5045746,38.6921182 L51.4954254,38.6921182 L51.4954254,24.9031465 C51.4954254,21.9449137 51.4954254,20.6242603 50.7805045,19.4087374 C50.2564344,18.510908 49.206755,17.7703905 47.9200513,17.7703905 C47.2997862,17.7703905 46.6795212,17.9292373 46.1069688,18.2476981 C44.0568619,19.4087374 44.0091492,21.4169593 44.0091492,26.5936749 L44.0091492,38.6921182 L37,38.6921182 L37,11.3259705 L43.9614365,11.3259705 Z"
              id="Fill-3"
            ></path>
            <polygon
              id="Fill-5"
              points="100.789916 10.6921182 108 10.6921182 100.789916 38.6921182 94.2042663 38.6921182 90.0224952 19.7731569 85.8895928 38.6921182 79.210084 38.6921182 72 10.6921182 79.210084 10.6921182 83.0063348 28.2064472 86.8987718 10.6921182 93.1462185 10.6921182 96.9928895 28.2064472"
            ></polygon>
            <path
              d="M123.018324,39.1030254 L130,39.1030254 L130,11.3348356 L123.163873,11.3348356 L123.163873,14.9199087 C121.90401,12.2433443 119.721552,10.6921182 116.958461,10.6921182 C112.206978,10.6921182 106,14.759035 106,25.6743506 C106,34.341321 110.461167,39.6921182 116.42478,39.6921182 C120.497815,39.6921182 122.14581,37.3380783 123.018324,36.0534207 L123.018324,39.1030254 Z M122.649755,24.9243841 C122.649755,27.4392976 122.310923,29.8469621 120.808477,31.6670881 C119.547049,33.1102879 118.141637,33.2183141 117.704206,33.2183141 C116.299576,33.2183141 114.69775,32.3618757 113.728986,29.9534341 C113.148353,28.5623045 112.954288,26.9038293 112.954288,25.1917296 C112.954288,23.0514107 113.244604,20.8574673 114.456733,19.0925202 C115.329247,17.8614871 116.686143,17.0602276 117.996087,17.0602276 C119.061102,17.0602276 120.128464,17.5941415 120.856994,18.45058 C121.777242,19.4671149 122.649755,21.3408654 122.649755,24.9243841 L122.649755,24.9243841 Z"
              id="Fill-7"
            ></path>
            <path
              d="M145.978037,10.6921182 L153,10.6921182 L145.272655,38.065547 C144.70835,39.9823909 143.816383,43.1253033 142.454162,44.6692987 C141.184474,46.0531702 139.680418,46.6921182 134.088181,46.6921182 C133.288748,46.6921182 132.961087,46.6395172 132.255705,46.5861426 L132.255705,40.4612151 L134.088181,40.4612151 C134.745779,40.4612151 136.296861,40.4612151 137.002242,39.7696661 C137.565031,39.2908419 138.036044,38.118148 138.036044,37.0003758 C138.036044,36.4140289 137.753133,35.3488577 137.519522,34.6565352 L130,10.6921182 L137.519522,10.6921182 L141.936882,29.2780784 L145.978037,10.6921182 Z"
              id="Fill-9"
            ></path>
            <path
              d="M16.8349469,0.692118227 L5,38.6921182 L13.6919056,38.6921182 L15.9012401,30.6184638 L26.9997421,30.6184638 L29.2593591,38.6921182 L38,38.6921182 L25.673832,0.692118227 L16.8349469,0.692118227 Z M21.3038984,9.03489443 L25.0851403,23.6751211 L17.7191448,23.6751211 L21.3038984,9.03489443 Z"
              id="Fill-11"
            ></path>
            <path
              d="M148.63208,43.6921182 L147.973223,43.6921182 L147.973223,41.2167043 L147,41.2167043 L147,40.6921182 L149.57827,40.6921182 L149.57827,41.2167043 L148.63208,41.2167043 L148.63208,43.6921182 Z M153,43.6921182 L152.360453,43.6921182 L152.38826,41.966328 C152.38826,41.7856957 152.415294,41.4598051 152.425335,41.3521784 C152.38826,41.4778684 152.332647,41.6773164 152.28553,41.848917 L151.710093,43.6921182 L151.126159,43.6921182 L150.533728,41.848917 C150.515191,41.7766641 150.413234,41.4417419 150.394696,41.369489 C150.422503,41.532058 150.430999,41.7224745 150.44104,41.966328 L150.478115,43.6921182 L149.837796,43.6921182 L149.837796,40.6921182 L150.690525,40.6921182 L151.432801,42.9598051 L152.138002,40.6921182 L153,40.6921182 L153,43.6921182 Z"
              id="Fill-13"
            ></path>
          </svg>
          <h1 className="text-red-800">
            <b className="sr-only">Amway</b> PRODUCTS
          </h1>
        </div>
        <button
          onClick={handleClick}
          className={
            (menuOpen === false ? "" : "fixed right-[4.16666vw]") +
            " h-16 w-full flex items-center justify-end z-10 md:hidden"
          }
        >
          MENU{" "}
          <div
            className={
              (menuOpen === false ? "rotate-0 " : "rotate-90 ") +
              "duration-300 text-red-700"
            }
          >
            {menuOpen === false ? (
              <Bars3Icon className="size-5" />
            ) : (
              <XMarkIcon className="size-5" />
            )}
          </div>
        </button>
        <div
          className={
            (menuOpen ? "right-0 " : "-right-48 ") +
            " fixed h-full pt-16 md:pt-0 top-0 bg-white md:static flex flex-col md:flex-row duration-300 ease-in-out z-1"
          }
        >
          <MenuLink to="/" className="uppercase">
            <button onClick={() => setShowSubMenu(1)}>products</button>
            <div
              className={
                (showSubMenu === 1 ? " left-[0vw] " : " left-[101vw] ") +
                " fixed md:absolute top-16 md:left-0 w-full md:hidden group-hover:block bg-gray-50 border-t min-h-24 -z-10"
              }
            >
              <div className="w-full px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                {/* Nutrition Column */}
                <div>
                  <h2 className="font-bold text-lg">NUTRITION</h2>
                  <Link
                    to="/nutrition/vitamins-supplements"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Vitamins & Supplements
                  </Link>
                  <Link
                    to="/nutrition/weight-management"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Weight Management
                  </Link>
                  <Link
                    to="/nutrition/sports-nutrition"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Sports Nutrition
                  </Link>
                  <Link
                    to="/nutrition/energy-drinks"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Energy Drinks
                  </Link>
                  <Link
                    to="/nutrition/wellness-recommender"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Wellness Recommender
                  </Link>
                  <Link
                    to="/nutrition/wellness-needs"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Wellness Needs
                  </Link>
                  <Link
                    to="/nutrition/shop-all"
                    className="block py-1 font-bold hover:bg-gray-100"
                  >
                    Shop All Nutrition
                  </Link>
                </div>
                {/* Home Column */}
                <div>
                  <h2 className="font-bold text-lg">HOME</h2>
                  <Link
                    to="/home/air-treatment"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Air Treatment
                  </Link>
                  <Link
                    to="/home/cookware"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Cookware
                  </Link>
                  <Link
                    to="/home/dish"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Dish
                  </Link>
                  <Link
                    to="/home/disinfectant-cleaners"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Disinfectant Cleaners
                  </Link>
                  <Link
                    to="/home/laundry"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Laundry
                  </Link>
                  <Link
                    to="/home/surface-cleaners"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Surface Cleaners
                  </Link>
                  <Link
                    to="/home/water-treatment"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Water Treatment
                  </Link>
                  <Link
                    to="/home/shop-all"
                    className="block py-1 font-bold hover:bg-gray-100"
                  >
                    Shop All Home
                  </Link>
                </div>
                {/* Personal Care Column */}
                <div>
                  <h2 className="font-bold text-lg">PERSONAL CARE</h2>
                  <Link
                    to="/personal-care/bath-body"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Bath & Body Care
                  </Link>
                  <Link
                    to="/personal-care/hair-care"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Hair Care
                  </Link>
                  <Link
                    to="/personal-care/oral-care"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Oral Care
                  </Link>
                  <Link
                    to="/personal-care/shop-all"
                    className="block py-1 font-bold hover:bg-gray-100"
                  >
                    Shop All Personal Care
                  </Link>
                </div>
                {/* Beauty Column */}
                <div>
                  <h2 className="font-bold text-lg">BEAUTY</h2>
                  <Link
                    to="/beauty/skin-care"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Skin Care
                  </Link>
                  <Link
                    to="/beauty/makeup"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Makeup
                  </Link>
                  <Link
                    to="/beauty/fragrance"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Fragrance
                  </Link>
                  <Link
                    to="/beauty/artistry-app"
                    className="block py-1 hover:bg-gray-100"
                  >
                    Artistry™ Beauty App
                  </Link>
                  <Link
                    to="/beauty/shop-all"
                    className="block py-1 font-bold hover:bg-gray-100"
                  >
                    Shop All Beauty
                  </Link>
                </div>
              </div>
            </div>
          </MenuLink>
          <MenuLink to="/" className="uppercase">
            Categories
          </MenuLink>
          <MenuLink to="/" className="uppercase">
            Brands
          </MenuLink>
          <MenuLink to="/" className="uppercase">
            Register
          </MenuLink>
        </div>
      </div>
    </header>
  )
}

export default Header
