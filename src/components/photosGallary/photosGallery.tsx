import { useEffect, useState } from "react"
import "./photosGallery.css"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs"
import type { Dayjs } from "dayjs"

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded"
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded"
import type { RootState } from "../../redux/store/store"
import { fetchPhotosAction } from "../../redux/slices/photos/photosSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchUsersAction } from "../../redux/slices/users/userSlice"
import ImageLoader from "../../utils/imageLoader"
import NoPhotosIllustration from "../../utils/illustrations/noPhotos"
import UserNavbar from "../navbar/userNavbar"

const PhotosGallery = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs())

  const [selectedTab, setSelectedTab] = useState<string>("photos")
  // const [selectItems, setSelectItems] = useState<boolean>(false)
  const [selectedImageIds, setSelectedImageIds] = useState<string[]>([]) // State to track selected image IDs
  const [selectAll, setSelectAll] = useState(false) // State for "Select All" checkbox

  const maxDate = dayjs().add(0, "day")
  const dispatch = useAppDispatch()

  const { usersList, loading: userLoading } = useAppSelector(
    (state: RootState) => state.users,
  )
  const { allPhotos, loading } = useAppSelector(
    (state: RootState) => state.photos,
  )

  const handleClickLeftDateBtn = () => {
    if (date) {
      const prevDate = date.subtract(1, "day")
      setSelectAll(false)
      // alert(prevDate)
      setDate(prevDate)
    }
  }
  const handleClickRightDateBtn = () => {
    if (date) {
      const prevDate = date.add(1, "day")
      setSelectAll(false)

      // alert(prevDate)
      setDate(prevDate)
    }
  }

  const handleClickDownloadImage = async () => {
    for (let i = 0; i < selectedImageIds.length; i++) {
      const imageUrl = selectedImageIds[i]

      try {
        // Fetch each image
        const response = await fetch(imageUrl)
        const blob = await response.blob()

        // Create a Blob URL
        const url = URL.createObjectURL(blob)

        // Create a temporary link element
        const link = document.createElement("a")
        link.href = url

        // Set download attribute with a dynamic name for each image
        link.download = `image_${i + 1}.jpg`

        // Append the link to the body
        document.body.appendChild(link)

        // Programmatically click the link to trigger the download
        link.click()

        // Remove the link from the DOM
        document.body.removeChild(link)

        // Release the object URL
        URL.revokeObjectURL(url)
      } catch (error) {
        console.error(`Failed to download image ${i + 1}:`, error)
      }
    }

    // const imageUrl =
    //   "https://res.cloudinary.com/dlxxvqogg/image/upload/v1726320097/y1sf4px5lpe6tym4tqhm.jpg"

    // // Fetch the image as a blob
    // const response = await fetch(imageUrl)
    // const blob = await response.blob()

    // // Create a temporary link element
    // const link = document.createElement("a")

    // // Create a URL for the blob object
    // const url = URL.createObjectURL(blob)

    // // Set the href of the link to the blob URL
    // link.href = url

    // // Set the download attribute with the desired filename
    // link.download = "downloaded_image.jpg" // You can change the name here

    // // Append the link to the body
    // document.body.appendChild(link)

    // // Programmatically click the link to trigger the download
    // link.click()

    // // Remove the link after download is triggered
    // document.body.removeChild(link)

    // // Release the object URL after the download
    // URL.revokeObjectURL(url)
  }

  // Handle "Select All" checkbox
  const handleSelectAllChange = () => {
    console.log("s")

    if (selectAll) {
      // Deselect all images for the selected date
      const dateSpecificIds =
        allPhotos
          ?.filter(photo => {
            const photoDate = new Date(photo?.date).toISOString().split("T")[0]
            const selectedDate = date
              ? date.toDate().toISOString().split("T")[0]
              : ""
            return photoDate === selectedDate
          })
          ?.map(photo => photo.image) || []
      //
      const selImgs = selectedImageIds.filter(
        id => !dateSpecificIds.includes(id),
      )
      setSelectedImageIds(selImgs)
      //   deletePhotosAction(selImgs)
    } else {
      // Select all images for the selected date
      const dateSpecificIds =
        allPhotos
          ?.filter(photo => {
            const photoDate = new Date(photo?.date).toISOString().split("T")[0]
            const selectedDate = date
              ? date.toDate().toISOString().split("T")[0]
              : ""
            return photoDate === selectedDate
          })
          ?.map(photo => photo.image) || []
      //
      const selImgs = [...new Set([...selectedImageIds, ...dateSpecificIds])]
      setSelectedImageIds(selImgs) // Add unique IDs
      //   deletePhotosAction(selImgs) // Delete
    }
    setSelectAll(!selectAll) // Toggle select all state
  }

  // Handle individual checkbox selection
  const handleCheckboxChange = (imageUrl: string) => {
    let updatingImgsLength = selectedImageIds?.length
    if (selectedImageIds.includes(imageUrl)) {
      updatingImgsLength -= 1
      setSelectedImageIds(selectedImageIds.filter(id => id !== imageUrl)) // Deselect
    } else {
      updatingImgsLength += 1
      setSelectedImageIds([...selectedImageIds, imageUrl]) // Select
    }

    console.log(selectedImageIds)

    const currentDateImagesLength = allPhotos?.filter(photo => {
      // Convert the photo date and the given date to just the date part
      const photoDate = new Date(photo?.date).toISOString().split("T")[0]
      const selectedDate = date ? date.toDate().toISOString().split("T")[0] : ""

      return photoDate === selectedDate
    }).length

    if (currentDateImagesLength === updatingImgsLength) {
      setSelectAll(true)
    } else {
      setSelectAll(false)
    }
  }

  //fetch post
  useEffect(() => {
    dispatch(fetchPhotosAction())
  }, [dispatch])

  // fetch users
  useEffect(() => {
    dispatch(fetchUsersAction())
  }, [dispatch])

  return (
    <div>
      <UserNavbar />
      <div className="ad-cont">
        {/* <Sidebar /> */}
        <div className="db-cont">
          <div className="form">
            {loading || userLoading ? (
              <>
                <ImageLoader />
              </>
            ) : (
              <>
                {/* <div className="db-det-cont">
                <div className="db-det-l-cont">
                  {usersList && usersList[0]?.profilePhoto && (
                    <>
                      <img
                        alt="person"
                        src={`data:image/jpeg;base64,${usersList[0]?.profilePhoto}`}
                      />{" "}
                    </>
                  )}

                  <span>
                    {usersList && (
                      <>
                        {" "}
                        {usersList.length > 0
                          ? `${usersList[0]?.lastName} ${usersList[0]?.firstName}`
                          : "Loading"}
                      </>
                    )}
                  </span>
                </div>
                <div className="db-det-r-cont">
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
              </div> */}
                <div className="db-det-cont">
                  <div className="db-det-l-cont">
                    {usersList && usersList[0]?.profilePhoto && (
                      <>
                        <img
                          alt="person"
                          src={`data:image/jpeg;base64,${usersList[0]?.profilePhoto}`}
                        />{" "}
                      </>
                    )}

                    <span>
                      {usersList && (
                        <>
                          {" "}
                          {usersList.length > 0
                            ? `${usersList[0]?.lastName} ${usersList[0]?.firstName}`
                            : "Loading"}
                        </>
                      )}
                    </span>
                  </div>
                  <div className="db-det-m-cont">
                    <button
                      onClick={() => setSelectedTab("knowYourLeader")}
                      className={
                        selectedTab === "knowYourLeader"
                          ? "selected-btn"
                          : "select-btn"
                      }
                    >
                      {" "}
                      Know Your Leader
                    </button>
                    <button
                      onClick={() => setSelectedTab("photos")}
                      className={
                        selectedTab === "photos" ? "selected-btn" : "select-btn"
                      }
                    >
                      {" "}
                      Photos
                    </button>
                    {/* <div className="pg-pt-cont">
                    <span
                      onClick={() => setSelectedTab("knowYourLeader")}
                      className={
                        selectedTab === "knowYourLeader"
                          ? "pg-pt-cont-selected"
                          : ""
                      }
                    >
                      Know Your Leader
                    </span>
                    <span
                      onClick={() => setSelectedTab("photos")}
                      className={
                        selectedTab === "photos" ? "pg-pt-cont-selected" : ""
                      }
                    >
                      Photos
                    </span>
                  </div> */}
                    {selectedTab === "photos" && (
                      <div className="checkbox-cont">
                        <input
                          type="checkbox"
                          className="input-checkbox"
                          id="selectCheckbox"
                          checked={selectAll}
                          onChange={handleSelectAllChange}
                        />
                        <label htmlFor="selectCheckbox">
                          Select All Images
                        </label>
                      </div>
                    )}
                  </div>
                  <div className="db-det-r-cont">
                    {/* <span>Select All Photos</span> */}
                    {/* {selectItems && selectedTab === "photos" && ( */}

                    {/* // )} */}
                    {/* {selectedTab === "photos" && (
                    <button
                      className="select-btn"
                      onClick={handleClickSelectBtn}
                    >
                      Select
                    </button>
                  )} */}

                    {/* <button onClick={handleClickDownloadImage}>Download</button> */}
                    {selectedImageIds.length > 0 &&
                      selectedTab === "photos" && (
                        <button
                          className="Download-button"
                          onClick={handleClickDownloadImage}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="20"
                            viewBox="0 0 640 512"
                          >
                            <path
                              d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
                              fill="white"
                            ></path>
                          </svg>
                          <span>Download</span>
                        </button>
                      )}

                    <button
                      type="button"
                      onClick={handleClickLeftDateBtn}
                      className="pn-btn"
                      disabled={selectedTab !== "photos"}
                    >
                      <ArrowBackIosNewRoundedIcon />
                    </button>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={date}
                        format="DD-MMM-YYYY"
                        className="mui-date custom-datepicker" // Add custom class here
                        onChange={date => {
                          setDate(date)
                          setSelectAll(false)
                        }}
                        maxDate={maxDate}
                        disabled={selectedTab !== "photos"}
                      />
                    </LocalizationProvider>
                    <button
                      type="button"
                      onClick={handleClickRightDateBtn}
                      className="pn-btn"
                      disabled={selectedTab !== "photos"}
                    >
                      <ArrowForwardIosRoundedIcon className="pn-btn-icon" />
                    </button>
                  </div>
                </div>
                {selectedTab === "photos" ? (
                  <>
                    {allPhotos ? (
                      <>
                        <div className="db-imgs-cont">
                          {allPhotos?.filter(photo => {
                            // Convert the photo date and the given date to just the date part
                            const photoDate = new Date(photo?.date)

                              .toISOString()
                              .split("T")[0]
                            console.log(photoDate)

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
                                <div
                                  key={photo?._id}
                                  // className="delete-img-container"
                                  className={
                                    selectedImageIds.includes(photo.image)
                                      ? "delete-img-container selected-photo-cont"
                                      : "delete-img-container"
                                  }
                                  onClick={() =>
                                    handleCheckboxChange(photo.image)
                                  }
                                >
                                  {/* <CldImage publicId={photo.public_id} /> */}

                                  <img src={photo?.image} alt="img" />
                                  <br />
                                  <input
                                    type="checkbox"
                                    className="input-checkbox"
                                    checked={selectedImageIds.includes(
                                      photo.image,
                                    )}
                                    onChange={e => {
                                      e.stopPropagation()
                                      handleCheckboxChange(photo.image)
                                    }}
                                  />
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
                ) : (
                  <>
                    <div className="kyl-header">
                      {usersList && usersList[0]?.profilePhoto && (
                        <img
                          src={`data:image/jpeg;base64,${usersList && usersList[0]?.profilePhoto}`}
                          alt="kollu"
                        />
                      )}

                      <div className="kyl-header-r-cont">
                        <h3>
                          SRI {usersList && usersList[0]?.lastName}{" "}
                          {usersList && usersList[0]?.firstName}
                        </h3>{" "}
                        <div>
                          <p>{usersList && usersList[0]?.designation}</p>
                          <p>{usersList && usersList[0]?.workPlace}</p>
                          <p>Telugu Desam Party</p>
                        </div>
                      </div>
                    </div>
                    <div className="kyl-body">
                      <div className="kyl-body-sec">
                        <p>Father Name:</p>
                        {/* <span>Mr.K.Subba Rao</span> */}
                        <span>{usersList && usersList[0]?.fatherName}</span>
                      </div>
                      {/*  */}
                      <div className="kyl-body-sec">
                        <p>Spouse Name:</p>
                        <span>{usersList && usersList[0]?.spouseName}</span>
                        {/* <span>Mrs.K.Neelima</span> */}
                      </div>
                      {/*  */}
                      <div className="kyl-body-sec">
                        <p>Profession:</p>
                        <span>{usersList && usersList[0]?.profession}</span>
                      </div>
                      {/*  */}
                      <div className="kyl-body-sec">
                        <p>Positions Held:</p>
                        <span>
                          <ul>
                            {usersList &&
                              usersList[0]?.positionHeld
                                ?.split("\n")
                                .filter(line => line.trim() !== "")
                                .map((line, index) => (
                                  <li key={index}>{line}</li>
                                ))}
                          </ul>
                        </span>
                      </div>
                      {/*  */}
                      <div className="kyl-body-sec">
                        <p>Special Intrests:</p>
                        <span>
                          {usersList && usersList[0]?.specialIntrests}
                        </span>
                      </div>
                      {/*  */}
                      <div className="kyl-body-sec">
                        <p>Phone No:</p>
                        <span>{usersList && usersList[0]?.phoneNo}</span>
                      </div>
                      {/*  */}
                      <div className="kyl-body-sec">
                        <p>Permanent Address:</p>
                        <span>
                          {usersList && usersList[0]?.premanentAddress}
                        </span>
                      </div>
                      {/*  */}
                      <div className="kyl-body-sec">
                        <p>Communication Address:</p>
                        <span>
                          {" "}
                          {usersList && usersList[0]?.communicationAddress}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotosGallery
