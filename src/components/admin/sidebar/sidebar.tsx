import "./sidebar.css"

import { useLocation, useNavigate } from "react-router-dom"

import GridViewIcon from "@mui/icons-material/GridView"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications"
import CollectionsIcon from "@mui/icons-material/Collections"
import { logoutAction } from "../../../redux/slices/users/userSlice"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { RootState } from "../../../redux/store/store"

const sidebarList = [
  {
    label: "Know Your Leader",
    icon: <GroupAddIcon />,
    path: "/know-your-leader",
  },
  {
    label: "Photos",
    icon: <CollectionsIcon />,
    path: "/dashboard",
  },
  {
    label: "Upload Photos",
    icon: <CloudUploadIcon />,
    path: "/upload-photos",
  },

  // {
  //   label: "Leaders",
  //   icon: <SupervisedUserCircleIcon />,
  //   path: "/leaders",
  // },
  // {
  //   label: "Create Leaders",
  //   icon: <GroupAddIcon />,
  //   path: "/create-leaders",
  // },
]

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { userAuth } = useAppSelector((state: RootState) => state.users)

  const handleLogout = () => {
    dispatch(logoutAction()).then(() => {
      navigate("/login")
    })
  }

  return (
    <div className="sidebar-cont">
      {/* <p>Current Path: {location.pathname}</p> */}
      <div>
        {sidebarList.map(sidebarItem => (
          <div
            className={`${location.pathname === sidebarItem.path ? "side-bar-active-item" : ""}  sidebar-cont-items`}
            key={sidebarItem.label}
            onClick={() => navigate(`${sidebarItem.path}`)}
          >
            {sidebarItem?.icon}
            {sidebarItem?.label}
          </div>
        ))}
      </div>
      <div className="sb-settings-cont">
        <div className="sidebar-cont-items">
          <SettingsApplicationsIcon />
          Settings
        </div>
        <div className="sb-settings-card">
          <p onClick={() => navigate(`/user-bio/${userAuth?._id}`)}>Edit Bio</p>
          <p onClick={() => navigate(`/edit-profile/${userAuth?._id}`)}>
            Edit Profie
          </p>

          <p onClick={handleLogout}>Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
