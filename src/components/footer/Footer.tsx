// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faUser } from "@fortawesome/free-solid-svg-icons"
import "./footer.css"
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"

function Footer() {
  return (
    <div className="footer">
      <div className="row u-text-center">
        <h1 className="footer__heading">Kollu Ravindra</h1>
        <div className="footer__social-icons">
          <div className="footer_social-icons_icon">
            <a href="#s">
              <FaInstagram />
            </a>
          </div>
          <div className="footer_social-icons_icon">
            <a href="#s">
              {/* <FontAwesomeIcon icon={faUser} /> */}
              <FaLinkedin />
            </a>
          </div>
          <div className="footer_social-icons_icon">
            <a href="#s">
              {/* <FontAwesomeIcon icon={faUser} /> */}
              <FaFacebook />
            </a>
          </div>
          <div className="footer_social-icons_icon">
            <a href="#s">
              {/* <FontAwesomeIcon icon={faUser} /> */}
              <FaTwitter />
            </a>
          </div>
        </div>
        <hr />
        <p className="u-text-center">
          Designed by BusinessLike Software Solutions{" "}
        </p>
      </div>
    </div>
  )
}

export default Footer
