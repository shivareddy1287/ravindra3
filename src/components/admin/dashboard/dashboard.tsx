import { useEffect, useState } from "react"
import "./dashboard.css"
import Sidebar from "../sidebar/sidebar"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"
import type { Dayjs } from "dayjs"

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { RootState } from "../../../redux/store/store"
import { fetchPhotosAction } from "../../../redux/slices/photos/photosSlice"
import { useNavigate } from "react-router-dom"
import { fetchUserDetailsAction } from "../../../redux/slices/users/userSlice"
import CircleLoader from "../../../utils/Loaders/circleLoader"
import NoPhotosIllustration from "../../../utils/illustrations/noPhotos"

const Dashboard = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs())
  // const [imagesCount, setImagesCount] = useState<number>(0)
  const maxDate = dayjs().add(0, "day")
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    userAuth,
    userDetails,
    loading: userLoading,
  } = useAppSelector((state: RootState) => state.users)
  const { allPhotos, loading } = useAppSelector(
    (state: RootState) => state.photos,
  )

  const handleClickLeftDateBtn = () => {
    if (date) {
      const prevDate = date.subtract(1, "day")
      // setSelectAll(false)
      // alert(prevDate)
      setDate(prevDate)
    }
  }
  const handleClickRightDateBtn = () => {
    if (date) {
      const prevDate = date.add(1, "day")
      // setSelectAll(false)

      // alert(prevDate)
      setDate(prevDate)
    }
  }

  //fetch post
  useEffect(() => {
    dispatch(fetchPhotosAction())
  }, [dispatch])

  useEffect(() => {
    if (userAuth?._id) {
      dispatch(fetchUserDetailsAction(userAuth._id))
    } else {
      console.error("User ID is not defined")
    }

    // setImagePreview(userDetails?.profilePhoto)
  }, [userAuth?._id, dispatch])

  return (
    <div className="ad-cont">
      <Sidebar />
      <div className="db-cont">
        <div className="form">
          {/* <NoPhotos /> */}
          {loading || userLoading ? (
            <>
              <CircleLoader />
            </>
          ) : (
            <>
              <div className="db-det-cont">
                <div className="db-det-l-cont">
                  {userDetails?.profilePhoto && (
                    <img
                      src={`data:image/jpeg;base64,${userDetails?.profilePhoto}`}
                      alt="leaders"
                    />
                  )}{" "}
                  <span>
                    {userDetails?.firstName} {userDetails?.lastName}
                    {/* :{" "}
                    {allPhotos?.length} */}
                  </span>
                </div>
                <div className="db-det-r-cont">
                  <div>
                    <button
                      className="delete-btn-img"
                      onClick={() => navigate("/delete-photos")}
                    >
                      Delete
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleClickLeftDateBtn}
                    className="pn-btn"
                  >
                    <ArrowBackIosNewRoundedIcon />
                  </button>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={date}
                      format="DD-MMM-YYYY"
                      className="mui-date custom-datepicker" // Add custom class here
                      onChange={date => setDate(date)}
                      maxDate={maxDate}
                    />
                  </LocalizationProvider>
                  <button
                    type="button"
                    onClick={handleClickRightDateBtn}
                    className="pn-btn"
                  >
                    <ArrowForwardIosRoundedIcon className="pn-btn-icon" />
                  </button>
                </div>
              </div>
              {/* {loading ? <span>Loading</span> : <span>Not Loading</span>} */}

              {allPhotos ? (
                <>
                  <div className="db-imgs-cont">
                    {allPhotos?.filter(photo => {
                      // Convert the photo date and the given date to just the date part
                      const photoDate = new Date(photo?.date)
                        .toISOString()
                        .split("T")[0]
                      const selectedDate = date
                        ? date.toDate().toISOString().split("T")[0]
                        : ""

                      return photoDate === selectedDate
                    }).length > 0 ? (
                      allPhotos
                        ?.filter(photo => {
                          const photoDate = new Date(photo?.date)
                            .toISOString()
                            .split("T")[0]
                          const selectedDate = date
                            ? date.toDate().toISOString().split("T")[0]
                            : ""

                          return photoDate === selectedDate
                        })
                        ?.map(photo => (
                          <div key={photo?._id}>
                            <img src={photo?.image} alt="img" />
                          </div>
                        ))
                    ) : (
                      <div className="illu-cont">
                        <NoPhotosIllustration />
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
