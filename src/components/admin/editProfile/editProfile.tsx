import { useEffect, useState } from "react"
import "./editProfile.css"
import { useFormik } from "formik"
import * as Yup from "yup"
import Sidebar from "../sidebar/sidebar"

import AccountBoxIcon from "@mui/icons-material/AccountBox"
import {
  fetchUserDetailsAction,
  updateProfileAction,
} from "../../../redux/slices/users/userSlice"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { useNavigate, useParams } from "react-router-dom"
import type { RootState } from "../../../redux/store/store"
import CircleLoader from "../../../utils/Loaders/circleLoader"

//Form Schema
const formSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required"),
  image: Yup.mixed(),
})

const CreateLeaders = () => {
  const [imagePreview, setImagePreview] = useState("")
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const navigate = useNavigate()

  const { isUpdated, userDetails, loading } = useAppSelector(
    (state: RootState) => state.users,
  )

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: userDetails?.firstName || "",
      lastName: userDetails?.lastName || "",
      email: userDetails?.email || "",
      image: userDetails?.profilePhoto || "", // Ensure it's either a string or an empty string
      // ? new File([userDetails.profilePhoto], "profile.jpg")
      // : null,
    },
    onSubmit: values => {
      if (id) {
        dispatch(updateProfileAction({ id, ...values }))
      } else {
        console.error("Image is not a valid file or ID is missing")
      }
    },
    validationSchema: formSchema,
  })

  useEffect(() => {
    if (id) {
      dispatch(fetchUserDetailsAction(id))
    } else {
      console.log("err")
    }
  }, [dispatch, id])

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0]
    formik.setFieldValue("image", selectedImage)

    if (selectedImage) {
      const reader = new FileReader()
      reader.onload = () => {
        setImagePreview(reader.result as string) // Cast result to string
      }
      reader.readAsDataURL(selectedImage)
    }
  }

  if (isUpdated) {
    navigate("/dashboard")
  }

  return (
    <div className="ad-cont">
      <Sidebar />
      <div className="db-cont">
        {/*  */}
        <form className="form" onSubmit={formik.handleSubmit}>
          {loading ? (
            <>
              <CircleLoader />
            </>
          ) : (
            <>
              <div className="flex-column">
                <label>First Name {userDetails?.email}</label>
              </div>
              <div className="inputForm">
                <AccountBoxIcon />
                <input
                  placeholder="Enter your First Name"
                  className="input"
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                  value={formik.values.firstName}
                  type="text"
                />
              </div>
              <div className="flex-column">
                <label>Last Name </label>
              </div>
              <div className="inputForm">
                <AccountBoxIcon />
                <input
                  placeholder="Enter your Lasr Name"
                  className="input"
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                  value={formik.values.lastName}
                  type="text"
                />
              </div>

              <div className="flex-column">
                <label>Email </label>
              </div>
              <div className="inputForm">
                <AccountBoxIcon />
                <input
                  placeholder="Enter your Email"
                  className="input"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  type="email"
                />
              </div>

              <div className="flex-column">
                <label>Image </label>
              </div>
              <label className="custum-file-upload" htmlFor="file">
                <div className="icon">
                  {!imagePreview && userDetails?.profilePhoto ? (
                    <img
                      src={`data:image/jpeg;base64,${userDetails?.profilePhoto}`}
                      alt="profile-img"
                    />
                  ) : (
                    <img src={imagePreview} alt="profile-img" />
                  )}
                </div>
                <div className="text">
                  <span>Click to upload image</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  id="file"
                  // value={profileImg}
                  onChange={e => handleImageChange(e)}
                />
              </label>

              <button type="submit" className="button-submit">
                {loading ? <>Updating...</> : <>Update Profile</>}
              </button>
            </>
          )}
        </form>
        {/*  */}
      </div>
    </div>
  )
}

export default CreateLeaders
