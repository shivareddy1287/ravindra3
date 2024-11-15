// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

import { Link } from "react-router-dom"

// import raghavendraLogo from "../assets/raghavendra-logo.png"
import { useEffect, useState } from "react"

function Header() {
  const activePage = window.location.pathname
  const [activeItem, setActiveItem] = useState("home")

  const [navItems, setNavItems] = useState({ display: "none" })
  const [openNavBtn, setOpenNavBtn] = useState({ display: "inline-block" })
  const [closeNavBtn, setCloseNavBtn] = useState({ display: "none" })
  const handleClickOpen = () => {
    setNavItems({ display: "flex" })
    setOpenNavBtn({ display: "none" })
    setCloseNavBtn({ display: "inline-block" })
  }
  const handleClickClose = () => {
    setNavItems({ display: "none" })
    setOpenNavBtn({ display: "inline-block" })
    setCloseNavBtn({ display: "none" })
  }

  //SCROLL
  // const [scrollValue, setScrollValue] = useState(0)

  useEffect(() => {
    setActiveItem(activePage)
  }, [activePage])

  //SCROLL BEHAVIOR

  // const handleScroll = () => {
  //   const pos = window.scrollY
  //   const calcHeight =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight
  //   const newValue = Math.round((pos / calcHeight) * 100)

  //   setScrollValue(newValue)

  //   const scrollProgress = document.getElementById("progress")
  //   if (pos > 100) {
  //     scrollProgress.style.display = "grid"
  //   } else {
  //     scrollProgress.style.display = "none"
  //   }
  // }

  // const handleScrollToTop = () => {
  //   document.documentElement.scrollTop = 0
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

  // useEffect(() => {
  //   const scrollProgress = document.getElementById("progress")

  //   scrollProgress.style.backgroundImage = `conic-gradient(#da3925 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
  // }, [scrollValue])

  // useEffect(() => {
  //   handleScroll() // Call the initial scroll handler to set the initial state
  // }, []) // Empty dependency array to run once on mount

  // const scrollToTop = () => {
  //   document.documentElement.scrollTop = 0
  // }

  return (
    <div className="header2">
      <div id="progress">
        {/* <span id="progress-value" onClick={scrollToTop}>
          
          <FontAwesomeIcon className="scroll-icon" icon={faArrowUp} />
        </span> */}
      </div>
      <header className="header">
        <a href="#s" className="header__logo">
          {/* <img className="header_logo_img" src={raghavendraLogo} /> */}
          <Link to="/aboutMe">
            {" "}
            <span> Raghavendra </span>{" "}
          </Link>
        </a>
        <ul className="header__navlist">
          <Link to="/">
            <li>
              <a href="#s" className={activeItem === "/" ? "active" : ""}>
                Home
              </a>
            </li>
          </Link>
          <Link to="/aboutMe">
            <li>
              <a
                href="#s"
                className={activeItem === "/aboutMe" ? "active" : ""}
              >
                About
              </a>
            </li>
          </Link>
          <li>
            <a
              href="#s"
              className={activeItem === "/activities/political" ? "active" : ""}
            >
              Activities{" "}
              <div className="header_navlist_sub-list">
                <ul>
                  <Link to="/activities/political">
                    <li> Political</li>
                  </Link>
                  <Link to="/activities/community">
                    <li>Community</li>{" "}
                  </Link>
                  <Link to="/activities/trust">
                    <li>Trust</li>
                  </Link>
                </ul>
              </div>
            </a>
          </li>

          <Link to="/services">
            <li>
              <a
                href="#s"
                className={activeItem === "/services" ? "active" : ""}
              >
                News & Media
              </a>
            </li>
          </Link>

          <li>
            <a href="#s" className={activeItem === "/images" ? "active" : ""}>
              Gallery
              <div className="header_navlist_sub-list">
                <ul>
                  <Link to="/images">
                    <li>Photos</li>
                  </Link>
                  <Link to="/videos">
                    <li>Videos</li>{" "}
                  </Link>
                </ul>
              </div>
            </a>
          </li>

          <Link to="/leaders">
            <li>
              <a
                href="#s"
                className={activeItem === "/leaders" ? "active" : ""}
              >
                Leaders
              </a>
            </li>
          </Link>

          <Link to="/contact">
            <li>
              <a
                href="#s"
                className={activeItem === "/contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>
          </Link>
        </ul>
      </header>
      <nav>
        <div className="nav__container">
          <a href="#s" className="header__logo">
            {/* <img className="header_logo_img" src={raghavendraLogo} /> */}
            <Link to="/aboutMe">
              {" "}
              <span> Raghavendra </span>{" "}
            </Link>
          </a>
          <ul style={navItems} className="nav__links">
            <li>
              <Link to="/">
                <a href="#s" className={activeItem === "/" ? "active" : ""}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="/aboutMe">
                <a
                  href="#s"
                  className={activeItem === "/aboutMe" ? "active" : ""}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/activities/political">
                <a href="#s"> Political</a>
              </Link>
            </li>
            <li>
              <Link to="/activities/community">
                <a href="#s">Community</a>
              </Link>
            </li>{" "}
            {/* <li>
              <Link to="/activities/trust">
                <a>Trust</a>
              </Link>
            </li> */}
            <li>
              <Link to="/services">
                <a
                  href="#s"
                  className={activeItem === "/services" ? "active" : ""}
                >
                  News & Media
                </a>
              </Link>
            </li>
            <li>
              <Link to="/images">
                <a href="#s">Photos</a>
              </Link>
            </li>
            <li>
              <Link to="/videos">
                <a href="#s">Videos</a>
              </Link>
            </li>{" "}
            <li>
              <Link to="/leaders">
                <a
                  href="#s"
                  className={activeItem === "/leaders" ? "active" : ""}
                >
                  Leaders
                </a>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <a
                  href="#s"
                  className={activeItem === "/contact" ? "active" : ""}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>
          <button
            className="nav__toggle-btn"
            id="nav__toggle-open"
            style={openNavBtn}
            onClick={handleClickOpen}
          >
            <i className="uil uil-bars"></i>
          </button>
          <button
            className="nav__toggle-btn"
            id="nav__toggle-close"
            style={closeNavBtn}
            onClick={handleClickClose}
          >
            <i className="uil uil-times"></i>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header
