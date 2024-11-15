import { useEffect } from "react"
import Sidebar from "../sidebar/sidebar"
import "./knowYourLeader.css"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { RootState } from "../../../redux/store/store"
import { fetchUserDetailsAction } from "../../../redux/slices/users/userSlice"
import CircleLoader from "../../../utils/Loaders/circleLoader"

const KnowYourLeader = () => {
  const dispatch = useAppDispatch()
  const { userAuth, loading, userDetails } = useAppSelector(
    (state: RootState) => state.users,
  )

  useEffect(() => {
    if (userAuth?._id) dispatch(fetchUserDetailsAction(userAuth?._id))
    // setImagePreview(userDetails?.profilePhoto)
  }, [dispatch, userAuth?._id])

  return (
    <div className="ad-cont">
      <Sidebar />
      <div className="db-cont">
        <form className="form">
          {loading ? (
            <>
              <CircleLoader />
            </>
          ) : (
            <>
              <div className="kyl-header">
                {userDetails?.profilePhoto && (
                  <img
                    src={`data:image/jpeg;base64,${userDetails?.profilePhoto}`}
                    alt="kollu"
                  />
                )}

                <div className="kyl-header-r-cont">
                  <h3>
                    SRI {userDetails?.lastName} {userDetails?.firstName}
                  </h3>{" "}
                  <div>
                    <p>{userDetails?.designation}</p>
                    <p>{userDetails?.workPlace}</p>
                    <p>Telugu Desam Party</p>
                  </div>
                </div>
              </div>
              <div className="kyl-body">
                <div className="kyl-body-sec">
                  <p>Father Name:</p>
                  {/* <span>Mr.K.Subba Rao</span> */}
                  <span>{userDetails?.fatherName}</span>
                </div>
                {/*  */}
                <div className="kyl-body-sec">
                  <p>Spouse Name:</p>
                  <span>{userDetails?.spouseName}</span>
                  {/* <span>Mrs.K.Neelima</span> */}
                </div>
                {/*  */}
                <div className="kyl-body-sec">
                  <p>Profession:</p>
                  <span>{userDetails?.profession}</span>
                </div>
                {/*  */}
                <div className="kyl-body-sec">
                  <p>Positions Held:</p>
                  <span>
                    <ul>
                      {userDetails?.positionHeld
                        ?.split("\n")
                        .filter(line => line.trim() !== "")
                        .map((line, index) => <li key={index}>{line}</li>)}
                    </ul>
                  </span>
                </div>
                {/*  */}
                <div className="kyl-body-sec">
                  <p>Special Intrests:</p>
                  <span>{userDetails?.specialIntrests}</span>
                </div>
                {/*  */}
                <div className="kyl-body-sec">
                  <p>Phone No:</p>
                  <span>{userDetails?.phoneNo}</span>
                </div>
                {/*  */}
                <div className="kyl-body-sec">
                  <p>Permanent Address:</p>
                  <span>{userDetails?.premanentAddress}</span>
                </div>
                {/*  */}
                <div className="kyl-body-sec">
                  <p>Communication Address:</p>
                  <span> {userDetails?.communicationAddress}</span>
                </div>
              </div>
            </>
          )}
        </form>
      </div>{" "}
    </div>
  )
}

export default KnowYourLeader
