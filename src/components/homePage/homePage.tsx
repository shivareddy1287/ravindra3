import { useEffect, useState } from "react"
import "./homePage.css"
import { MaxWidthWrapper } from "../../utils/maxWidthWrapper"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import dayjs from "dayjs"
import type { Dayjs } from "dayjs"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import type { RootState } from "../../redux/store/store"
import { useNavigate } from "react-router-dom"
import { fetchUsersAction } from "../../redux/slices/users/userSlice"
import CircleLoader from "../../utils/Loaders/circleLoader"

const HomePage = () => {
  //   const [date, setDate] = useState(new Date())
  const [date, setDate] = useState<Dayjs | null>(dayjs())
  const maxDate = dayjs().add(0, "day")

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { usersList, loading } = useAppSelector(
    (state: RootState) => state.users,
  )

  // fetch users
  useEffect(() => {
    dispatch(fetchUsersAction())
  }, [dispatch])

  return (
    <div className="homePage-bg">
      <MaxWidthWrapper>
        <div className="homePage-card-cont">
          <div className="homePage-card">
            <div className="homePage-card_ic">
              {loading ? (
                <>
                  <CircleLoader />
                </>
              ) : (
                <>
                  <h1>Our Leader</h1>

                  <div className="inputForm-hp">
                    <AccountBoxIcon />

                    <select className="input-hp">
                      <option value="">
                        {usersList && (
                          <>
                            {" "}
                            {usersList.length > 0
                              ? `${usersList[0]?.lastName} ${usersList[0]?.firstName}`
                              : "Loading"}
                          </>
                        )}
                      </option>
                    </select>
                  </div>

                  <span>Date :</span>
                  <br />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={date}
                      format="DD-MMM-YYYY"
                      disabled
                      onChange={date => setDate(date)}
                      maxDate={maxDate}
                      sx={{
                        width: "100%",
                      }}
                    />
                  </LocalizationProvider>
                  <div className="leader-card-container">
                    <div className="leader-card">
                      {usersList && usersList[0]?.profilePhoto && (
                        <>
                          <img
                            alt="person"
                            src={`data:image/jpeg;base64,${usersList[0]?.profilePhoto}`}
                          />{" "}
                        </>
                      )}

                      <p>
                        {" "}
                        {usersList && (
                          <>
                            {" "}
                            {usersList.length > 0
                              ? `${usersList[0]?.firstName}`
                              : "Loading"}
                          </>
                        )}{" "}
                        Photos
                      </p>
                      <button onClick={() => navigate("/photos-gallery")}>
                        Go
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
            <h4>@Telugu Desam Party</h4>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

export default HomePage
