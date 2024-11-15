// import React, { useState, useEffect } from "react"
// import "./slider.css"

// import img1 from "../../../Assets/sliderImgs/B44A7954.jpg"
// import img2 from "../../../Assets/sliderImgs/B44A7954.jpg"
// import img3 from "../../../Assets/sliderImgs/B44A7954.jpg"

// //blog/src/components/assets/newslide1.JPG
// import sliderImg1 from "../assets/yuvachaithanya-yathra (105).jpg"
// import { number } from "yup"

// function HeaderSlider() {
//   const [activeSlide, setActiveSlide] = useState(0)

//   const handleSlideClick = (index: number) => {
//     setActiveSlide(index)
//   }

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide(prevSlide => (prevSlide + 1) % 9)
//     }, 4000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="slider-cont">
//       <div className="slider">
//         <img
//           className={`img-slide ${activeSlide === 0 ? "active" : ""}`}
//           alt="1"
//           src={img1}
//         />
//         <img
//           className={`img-slide ${activeSlide === 1 ? "active" : ""}`}
//           src={img2}
//           alt="1"
//         />
//         <img
//           className={`img-slide ${activeSlide === 2 ? "active" : ""}`}
//           alt="1"
//           src={img3}
//         />
//         <img
//           className={`img-slide ${activeSlide === 3 ? "active" : ""}`}
//           alt="1"
//           src={img1}
//         />
//         <img
//           className={`img-slide ${activeSlide === 4 ? "active" : ""}`}
//           alt="1"
//           src={img1}
//         />
//         <img
//           className={`img-slide ${activeSlide === 5 ? "active" : ""}`}
//           alt="1"
//           src={img1}
//         />
//         <img
//           className={`img-slide ${activeSlide === 6 ? "active" : ""}`}
//           alt="1"
//           src={img1}
//         />
//         <img
//           className={`img-slide ${activeSlide === 7 ? "active" : ""}`}
//           alt="1"
//           src={img1}
//         />
//         <img
//           className={`img-slide ${activeSlide === 8 ? "active" : ""}`}
//           alt="1"
//           src={img1}
//         />

//         <div className="slider__navigation">
//           {Array.from({ length: 9 }).map((_, index) => (
//             <div
//               key={index}
//               className={`slider_navigation_btn ${
//                 activeSlide === index ? "active" : ""
//               }`}
//               onClick={() => handleSlideClick(index)}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeaderSlider
import React, { useState, useEffect } from "react"
import "./slider.css"

import img1 from "../../../Assets/sliderImgs/B44A7954.jpg"
import img2 from "../../../Assets/sliderImgs/B44A7954.jpg"
import img3 from "../../../Assets/sliderImgs/B44A7954.jpg"

function HeaderSlider() {
  const [activeSlide, setActiveSlide] = useState(0)

  const handleSlideClick = (index: number) => {
    setActiveSlide(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prevSlide => (prevSlide + 1) % 3)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slider-cont">
      <div className="slider">
        <img
          className={`img-slide ${activeSlide === 0 ? "active" : ""}`}
          alt="1"
          src={img1}
        />
        <img
          className={`img-slide ${activeSlide === 1 ? "active" : ""}`}
          src={img2}
          alt="1"
        />
        <img
          className={`img-slide ${activeSlide === 2 ? "active" : ""}`}
          alt="1"
          src={img3}
        />
        {/* Repeat as needed for additional slides */}

        <div className="slider__navigation">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className={`slider__navigation__btn ${
                activeSlide === index ? "active" : ""
              }`}
              onClick={() => handleSlideClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider
