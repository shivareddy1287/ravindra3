// import React from "react"
import HeaderSlider from "./slider/Slider"
import "./homePage.css"
import { MaxWidthWrapper } from "../../utils/maxWidthWrapper"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import img1 from "../../Assets/sliderImgs/B44A7954.jpg"
import Footer from "../footer/Footer"
import UserNavbar from "../navbar/userNavbar"

const HomePage2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  }
  return (
    <div>
      <UserNavbar />
      <HeaderSlider />
      <br />
      <br />
      <MaxWidthWrapper>
        <h1 className="heading-primary">About Me</h1>
        <br />
        <p>
          Raghavendra Ghanjam was born on 04 Feb at Kavali, Nellore district,
          Andhra Pradesh. He is working as "TDP Official Spokesperson & Social
          Media convener for State B.C Cell Andhra Pradesh". He have 15year's
          Experiencs in TDP party as a Senior Member.
        </p>

        <div className="homepage-aboutme">
          <div>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div>
            <h2>Welcome to Our Community</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="know-more-btn">Knnow More</button>
          </div>
        </div>
        <br />
        {/* recent photos */}
        <div className="u-text-center">
          <h1 className="heading-primary u-margin-bottom-medium">
            Recent Event Photos
          </h1>
          <br />
          <br />
          <div className="rp-row wow animate__bounceInLeft">
            <Slider {...settings}>
              <div>
                {/* <h3>1</h3> */}
                <img className="home__slider-img" alt="" src={img1} />
              </div>
              <div>
                {/* <h3>2</h3> */}
                <img className="home__slider-img" alt="" src={img1} />
              </div>
              <div>
                {/* <h3>3</h3> */}
                <img className="home__slider-img" alt="" src={img1} />
              </div>

              <div>
                <img className="home__slider-img" alt="" src={img1} />
              </div>
              <div>
                {/* <h3>6</h3> */}
                <img className="home__slider-img" alt="" src={img1} />
              </div>
              {/* <div>
              
              <img className="our-expertise-slider__image" src={react} />
            </div> */}
              <div>
                {/* <h3>8</h3> */}
                <img className="home__slider-img" alt="" src={img1} />
              </div>
            </Slider>
          </div>
        </div>
        {/* services */}
        <section className="section-services">
          <div className="u-text-center">
            <h1 className="heading-primary u-margin-top-medium">Services</h1>
          </div>
          <div className="container">
            <div
              className="card wow animate__rotateInDownLeft"
              data-wow-delay="0.5s"
              style={{ color: "#009688" }}
            >
              <div className="imgBx">
                <img src={img1} alt="" />
              </div>
              <div className="content">
                <h2>Service Poor People</h2>
                <p>
                  Lokesh recently toured Mangalagiri constituency extensively.
                  Met people directly. Asked about their problems. His tour went
                  on crossing chaotic mud and mud roads and streets.
                </p>
              </div>
            </div>
            <div
              className="card wow animate__zoomIn"
              data-wow-delay="0.5s"
              style={{ color: "#ff3e7f" }}
            >
              <div className="imgBx">
                <img src={img1} alt="" />
              </div>
              <div className="content">
                <h2>Media Coverage in Party Meetings</h2>
                <p>
                  Media coverage refers to the attention and exposure received
                  by a person, brand, event, or topic in various forms of media,
                  including print, broadcast, and digital platforms.
                </p>
              </div>
            </div>
            <div
              className="card wow animate__rotateInDownRight"
              data-wow-delay="0.5s"
              style={{ color: "#03a9f4" }}
            >
              <div className="imgBx">
                <img src={img1} alt="" />
              </div>
              <div className="content">
                <h2>Serve Food For Poor People</h2>
                <p>
                  Food is a basic need for every human being In March 2016, the
                  first 'Anna Canteen' named after TDP founder-president NT Rama
                  Rao, was opened on Andhra Pradesh. serve free food for poor
                  peoples.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* map */}
        <section className="section-contact">
          <div className="contact">
            <div className="u-text-center">
              <h1 className="heading-primary u-margin-bottom-medium">
                Contact
              </h1>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.6042164533246!2d80.58867899461163!3d16.44158174637774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f16278d72bb9%3A0x81527adac604b7b6!2sTelugu%20Desam%20Party%20Central%20Office!5e0!3m2!1sen!2sin!4v1691412942792!5m2!1sen!2sin"
        className="contactt__map2"
        allowFullScreen
        title="Google Maps"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Footer />
    </div>
  )
}

export default HomePage2
