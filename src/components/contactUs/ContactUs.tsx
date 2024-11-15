// import Header from "../header/header"
import Footer from "../footer/Footer"
// import { Link } from "react-router-dom"
import "./contactUs.css"

// import {
//   FaInstagram,
//   FaLinkedin,
//   FaFacebook,
//   FaTwitter,
//   FaSearchLocation,
// } from "react-icons/fa"
// import { CiLocationOn } from "react-icons/package"

// import cycle from "../../components/assets/cycle.png"
import cycle from "../../Assets/bg.jpeg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import UserNavbar from "../navbar/userNavbar"
// import HeaderAbout from "../headerAbout/headerAbout"

function ContactUs() {
  return (
    <div>
      {/* <HeaderAbout /> */}
      {/* <Header /> */}
      <UserNavbar />
      <div className="heading-direction-cont">
        <h1 className="heading-primary ">Contact</h1>
      </div>
      <div className="contactt">
        <div className="row">
          <div className="col-1-of-2">
            <div className="contactt__address">
              <div className="contactt__address__cont">
                <img src={cycle} alt="cycle" className="cycle" />
                <div>
                  <h2>Telugu Desam Party Central Office</h2>
                  <p>
                    TNH16, opposite to Happy Resorts & Recreations, Mangalagiri,
                    Andhra Pradesh 522503
                  </p>
                </div>
              </div>
              <div className="contactt__address__cont">
                <FontAwesomeIcon
                  className="contactt__addresscont__icon"
                  icon={faEnvelope}
                />

                <div>
                  <h2>Email</h2>
                  <p>tdprghanjam@gmail.com</p>
                </div>
              </div>
              <div className="contactt__address__cont">
                <FontAwesomeIcon
                  className="contactt__addresscont__icon"
                  icon={faPhone}
                />

                <div>
                  <h2>Contact</h2>
                  <p>+91 985 6666 606</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-2">
            <div className="contactt__form">
              <h1>Send Your Message</h1>
              <div className="contactt__form__flex-box">
                <div className="contactt__form__form-box">
                  <label>First Name</label>
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="contactt__form__form-box">
                  <label>Last Name</label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="contactt__form__flex-box">
                <div className="contactt__form__form-box">
                  <label>Email</label>
                  <input type="text" placeholder="Email" />
                </div>
                <div className="contactt__form__form-box">
                  <label>Phone</label>
                  <input type="text" placeholder="Phone" />
                </div>
              </div>
              <div className="contactt__form__form-box">
                <label>Message</label>
                <textarea placeholder="Enter Your Message..." />
              </div>
              <div className="contactt__form__form-box">
                <button className="btn">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.6042164533246!2d80.58867899461163!3d16.44158174637774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f16278d72bb9%3A0x81527adac604b7b6!2sTelugu%20Desam%20Party%20Central%20Office!5e0!3m2!1sen!2sin!4v1691412942792!5m2!1sen!2sin"
        className="contactt__map"
        allowFullScreen
        title="Google Maps"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Footer />
    </div>
  )
}

export default ContactUs
