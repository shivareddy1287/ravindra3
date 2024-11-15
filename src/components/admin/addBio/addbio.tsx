import { useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import Sidebar from "../sidebar/sidebar"

import AccountBoxIcon from "@mui/icons-material/AccountBox"
import PlaceIcon from "@mui/icons-material/Place"
import WorkIcon from "@mui/icons-material/Work"
import ControlCameraIcon from "@mui/icons-material/ControlCamera"
import PsychologyIcon from "@mui/icons-material/Psychology"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import {
  fetchUserDetailsAction,
  updateProfileBioAction,
} from "../../../redux/slices/users/userSlice"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { useNavigate, useParams } from "react-router-dom"
import type { RootState } from "../../../redux/store/store"
import CircleLoader from "../../../utils/Loaders/circleLoader"

//Form Schema
const formSchema = Yup.object({
  designation: Yup.string(),
  workPlace: Yup.string(),
  fatherName: Yup.string(),
  spouseName: Yup.string(),
  profession: Yup.string(),
  positionHeld: Yup.string(),
  specialIntrests: Yup.string(),
  phoneNo: Yup.string(),
  premanentAddress: Yup.string(),
  communicationAddress: Yup.string(),
})

const AddUserBio = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { isUpdatedBio, userDetails, loading } = useAppSelector(
    (state: RootState) => state.users,
  )

  const formik = useFormik({
    enableReinitialize: true, // Enable reinitialization when initialValues change

    initialValues: {
      designation: userDetails?.designation || "",
      workPlace: userDetails?.workPlace || "",
      fatherName: userDetails?.fatherName || "",
      spouseName: userDetails?.spouseName || "",
      profession: userDetails?.profession || "",
      positionHeld: userDetails?.positionHeld || "",
      specialIntrests: userDetails?.specialIntrests || "",
      phoneNo: userDetails?.phoneNo || "",
      premanentAddress: userDetails?.premanentAddress || "",
      communicationAddress: userDetails?.communicationAddress || "",
    },
    validationSchema: formSchema,
    onSubmit: values => {
      console.log("Form data:", values)
      // dispatch(updateProfileBioAction({ id, ...values }))
      if (id) {
        dispatch(updateProfileBioAction({ id, ...values }))
      } else {
        console.error("ID is undefined")
        // Handle the case where ID is undefined
      }
    },
  })

  useEffect(() => {
    if (id) {
      dispatch(fetchUserDetailsAction(id))
    }
  }, [id, dispatch])

  if (isUpdatedBio) {
    navigate("/know-your-leader")
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
              <h1>Know Your Leader</h1>
              <div className="flex-column">
                <label>Designation </label>
              </div>
              <div className="inputForm">
                <AccountBoxIcon />
                <input
                  placeholder="Enter your Designation"
                  className="input"
                  onChange={formik.handleChange("designation")}
                  onBlur={formik.handleBlur("designation")}
                  value={formik.values.designation}
                  type="text"
                />
              </div>
              <div className="flex-column">
                <label>Work Place </label>
              </div>
              <div className="inputForm">
                <PlaceIcon />
                <input
                  placeholder="Enter your Work Place"
                  className="input"
                  onChange={formik.handleChange("workPlace")}
                  onBlur={formik.handleBlur("workPlace")}
                  value={formik.values.workPlace}
                  type="text"
                />
              </div>
              {/*  */}
              <div className="flex-column">
                <label>Father Name </label>
              </div>
              <div className="inputForm">
                <AccountBoxIcon />
                <input
                  placeholder="Enter your Father Name"
                  className="input"
                  value={formik.values.fatherName}
                  onChange={formik.handleChange("fatherName")}
                  onBlur={formik.handleBlur("fatherName")}
                  type="text"
                />
              </div>
              {/*  */}
              <div className="flex-column">
                <label>Spouse Name </label>
              </div>
              <div className="inputForm">
                <AccountBoxIcon />
                <input
                  placeholder="Enter your Spouse Name"
                  className="input"
                  value={formik.values.spouseName}
                  onChange={formik.handleChange("spouseName")}
                  onBlur={formik.handleBlur("spouseName")}
                  type="text"
                />
              </div>
              {/*  */}
              <div className="flex-column">
                <label>Profession </label>
              </div>
              <div className="inputForm">
                <WorkIcon />
                <input
                  placeholder="Enter your Profession"
                  className="input"
                  value={formik.values.profession}
                  onChange={formik.handleChange("profession")}
                  onBlur={formik.handleBlur("profession")}
                  type="text"
                />
              </div>
              {/*  */}
              <div className="flex-column">
                <label>Position Held </label>
              </div>
              <div className="inputForm">
                <ControlCameraIcon />
                <textarea
                  placeholder="Enter your Position Held"
                  className="textarea"
                  value={formik.values.positionHeld}
                  onChange={formik.handleChange("positionHeld")}
                  onBlur={formik.handleBlur("positionHeld")}
                  // type="text"
                />
              </div>
              {/*  */}
              <div className="flex-column">
                <label>Special Intrests </label>
              </div>
              <div className="inputForm">
                <PsychologyIcon />
                <input
                  placeholder="Enter your Special Intrests"
                  className="input"
                  value={formik.values.specialIntrests}
                  onChange={formik.handleChange("specialIntrests")}
                  onBlur={formik.handleBlur("specialIntrests")}
                  type="text"
                />
              </div>
              {/*  */}
              <div className="flex-column">
                <label>Phone No: </label>
              </div>
              <div className="inputForm">
                <PhoneIphoneIcon />
                <input
                  placeholder="Enter your Phone No"
                  className="input"
                  value={formik.values.phoneNo}
                  onChange={formik.handleChange("phoneNo")}
                  onBlur={formik.handleBlur("phoneNo")}
                  type="number"
                />
              </div>
              {/*  */}
              <div className="flex-column">
                <label>Premanent Address: </label>
              </div>
              <div className="inputForm">
                <PlaceIcon />
                <input
                  placeholder="Enter your Premanent Address"
                  className="input"
                  value={formik.values.premanentAddress}
                  onChange={formik.handleChange("premanentAddress")}
                  onBlur={formik.handleBlur("premanentAddress")}
                  type="text"
                />
              </div>
              {/*  */}
              <div className="flex-column">
                <label>Communication Address: </label>
              </div>
              <div className="inputForm">
                <PlaceIcon />
                <input
                  placeholder="Enter your Communication Address"
                  className="input"
                  value={formik.values.communicationAddress}
                  onChange={formik.handleChange("communicationAddress")}
                  onBlur={formik.handleBlur("communicationAddress")}
                  type="text"
                />
              </div>

              <button type="submit" className="button-submit">
                Update Bio
              </button>
            </>
          )}
        </form>
        {/*  */}
      </div>
    </div>
  )
}

export default AddUserBio
