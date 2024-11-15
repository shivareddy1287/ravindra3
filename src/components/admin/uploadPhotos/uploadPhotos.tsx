import { useState } from "react"
import "./uploadPhotos.css"
import { useFormik } from "formik"
import * as Yup from "yup"
import Sidebar from "../sidebar/sidebar"
import dayjs from "dayjs" // Import Dayjs type
import type { Dayjs } from "dayjs" // Import Dayjs type
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { uploadPhotosAction } from "../../../redux/slices/photos/photosSlice"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { useNavigate } from "react-router-dom"
import type { RootState } from "../../../redux/store/store"

// Form Schema
const formSchema = Yup.object({
  userId: Yup.string().required("UserId is required"),
  date: Yup.mixed().required("Date is required"), // Use Yup.mixed for Day.js object
  image: Yup.array().min(1, "At least one image is required"),
})

const UploadPhotos: React.FC = () => {
  const [leaderImgs, setLeaderImgs] = useState<string[]>([])
  const [visibleImgs, setVisibleImgs] = useState<string[]>([])
  const [fileImgs, setFileImgs] = useState<(string | File)[]>([])
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { isUploaded, loading } = useAppSelector(
    (state: RootState) => state.photos,
  )
  const { userAuth } = useAppSelector((state: RootState) => state.users)

  const formik = useFormik({
    initialValues: {
      userId: userAuth?._id || "", // Get user ID from userAuth
      date: dayjs(), // Use Dayjs object
      image: [] as File[], // Array to hold multiple images
    },
    validationSchema: formSchema,
    onSubmit: values => {
      const formData = new FormData()
      formData.append("userId", values.userId)
      formData.append("date", values.date.toISOString()) // Convert Day.js to ISO string
      console.log(values?.image)
      console.log(visibleImgs)
      console.log(leaderImgs)

      fileImgs.forEach(img => {
        formData.append(`image`, img)
      })

      dispatch(uploadPhotosAction(formData))
    },
  })

  // const handleProfileImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // const latestImgs: React.ChangeEvent<HTMLInputElement>

  //   const files = Array.from(e.target.files);
  //   setFileImgs(prev => [...prev , ...files])

  //   if (e.target.files) {
  //     const files = Array.from(e.target.files)
  //     formik.setFieldValue("image", files)

  //     const urls = files.map(file => URL.createObjectURL(file))
  //     let allImages = [...leaderImgs, ...urls]
  //     setLeaderImgs(prev => [...prev, ...urls])
  //     setVisibleImgs(allImages.slice(0, 5))
  //     console.log(urls)
  //   }
  // }

  const handleProfileImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure there are files to process
    if (e.target.files) {
      const files = Array.from(e.target.files) // Convert FileList to an array

      // Update the formik field with the files
      formik.setFieldValue("image", files)

      // Generate object URLs for preview
      const urls = files.map(file => URL.createObjectURL(file))

      // Combine existing and new images
      const allImages = [...leaderImgs, ...urls]

      // Update state for files and image URLs
      setFileImgs(prev => [...prev, ...files])
      setLeaderImgs(prev => [...prev, ...urls])
      setVisibleImgs(allImages.slice(0, 5))

      console.log(urls) // Debugging/logging
    }
  }

  if (isUploaded) {
    navigate("/dashboard")
  }

  return (
    <div className="ad-cont">
      <Sidebar />
      <div className="db-cont">
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="sl-cont">
            <div className="flex-column">
              <label>Leader</label>
            </div>
            <div className="inputForm">
              <AccountBoxIcon />
              <select
                className="input"
                name="userId"
                value={formik.values.userId}
                onChange={formik.handleChange}
              >
                <option value="">
                  {userAuth?.firstName} {userAuth?.lastName}
                </option>
              </select>
              {formik.errors.userId && formik.touched.userId && (
                <div className="error">{formik.errors.userId}</div>
              )}
            </div>

            <div className="flex-column">
              <label>Date</label>
              <span>
                {formik.values.date
                  ? formik.values.date.format("DD-MMM-YYYY")
                  : ""}
              </span>
            </div>
            <div className="inputForm up-dp">
              <CalendarMonthIcon />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  format="DD-MMM-YYYY"
                  className="mui-date custom-datepicker up-d"
                  value={formik.values.date}
                  onChange={(date: Dayjs | null) =>
                    formik.setFieldValue("date", date)
                  } // Set the Day.js object directly
                />
              </LocalizationProvider>
            </div>

            <div className="flex-column">
              <label>Upload Images</label>
            </div>
            <label className="custum-up-file-upload" htmlFor="file">
              <div className="up-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                >
                  <path
                    fill=""
                    d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                  />
                </svg>
              </div>
              <div className="text">
                <span>Click to upload image</span>
              </div>
              <input
                type="file"
                id="file"
                multiple
                accept="image/*"
                onChange={handleProfileImgChange}
              />
            </label>
            <div className="leader-imgs-cont">
              {leaderImgs.length > 0 &&
                visibleImgs.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    alt="Preview"
                    className="uploaded-image"
                  />
                ))}
              {leaderImgs?.length > 5 && (
                <div className="uploaded-image uploaded-extra-photos">
                  <img src={leaderImgs[5]} alt="" />
                  <div className="uploaded-extra-photos_content">
                    <h3> + {leaderImgs?.length - 5}</h3>
                    <span>Photos</span>
                  </div>
                </div>
              )}
            </div>
            <button type="submit" className="button-submit" disabled={loading}>
              {loading ? "Uploading..." : "Upload Photos"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UploadPhotos
