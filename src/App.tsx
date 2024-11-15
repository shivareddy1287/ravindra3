import "./App.css"

import AuthPage from "./components/auth/auth"

import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import HomePage from "./components/homePage/homePage"
import Dashboard from "./components/admin/dashboard/dashboard"
import CreateLeaders from "./components/admin/createLeaders/createLeaders"
import Leaders from "./components/admin/leaders/leaders"
import UploadPhotos from "./components/admin/uploadPhotos/uploadPhotos"
import EditProfile from "./components/admin/editProfile/editProfile"
import PhotosGallery from "./components/photosGallary/photosGallery"
import DeletePhotos from "./components/admin/dashboardDeletePhotos/dashboardDeletePhotos"
import AddUserBio from "./components/admin/addBio/addbio"
import KnowYourLeader from "./components/admin/knowYourLeader/knowYourLeader"
import HomePage2 from "./components/homePage/homePage2"
import AboutMe from "./components/aboutMe/AboutMe"
import ContactUs from "./components/contactUs/ContactUs"
import type { RootState } from "./redux/store/store"
import { useAppSelector } from "./app/hooks"
import TopHeader from "./components/navbar/topHeader"
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute"

const App = () => {
  const navigate = useNavigate()
  const location = useLocation() // Hook to get current route

  const { userAuth, loading, userDetails } = useAppSelector(
    (state: RootState) => state.users,
  )
  console.log(location.pathname)

  // const showTopHeader = ![
  //   "/dashboard",
  //   "/create-leaders",
  //   "/upload-photos",
  //   "/leaders",
  //   "/delete-photos",
  //   "/edit-profile",
  //   "/user-bio/:id",
  //   "/know-your-leader",
  // ].includes(location.pathname)
  const showTopHeader = ![
    "/dashboard",
    "/create-leaders",
    "/upload-photos",
    "/leaders",
    "/delete-photos",
    "/edit-profile",
    "/user-bio", // Removed :id since we're now using startsWith
    "/know-your-leader",
  ].some(path => location.pathname.startsWith(path))

  return (
    <div className="App">
      <div>
        <div>
          {showTopHeader && <TopHeader />}
          {!showTopHeader && <Navbar />}
          {/* <div className="sticky_navbar_cont">
            <Navbar />
          </div> */}
        </div>
      </div>
      <Routes>
        <Route element={<HomePage2 />} path="/" />
        <Route element={<AuthPage />} path="/login" />
        <Route
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          path="/dashboard"
        />{" "}
        <Route
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          path="/dashboard"
        />
        <Route
          element={
            <ProtectedRoute>
              <UploadPhotos />
            </ProtectedRoute>
          }
          path="/upload-photos"
        />
        <Route
          element={
            <ProtectedRoute>
              <Leaders />
            </ProtectedRoute>
          }
          path="/leaders"
        />
        <Route
          element={
            <ProtectedRoute>
              <CreateLeaders />
            </ProtectedRoute>
          }
          path="/create-leaders"
        />
        <Route
          element={
            <ProtectedRoute>
              <DeletePhotos />
            </ProtectedRoute>
          }
          path="/delete-photos"
        />
        <Route
          element={
            <ProtectedRoute>
              <AddUserBio />
            </ProtectedRoute>
          }
          path="/user-bio/:id"
        />
        <Route
          element={
            <ProtectedRoute>
              <KnowYourLeader />
            </ProtectedRoute>
          }
          path="/know-your-leader"
        />
        <Route
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
          path="/edit-profile/:id"
        />
        {/* <Route element={<UploadPhotos />} path="/upload-photos" />
        <Route element={<Leaders />} path="/leaders" />
        <Route element={<AddUserBio />} path="/user-bio/:id" />
        <Route element={<KnowYourLeader />} path="/know-your-leader" />
        <Route element={<CreateLeaders />} path="/create-leaders" />
        <Route element={<DeletePhotos />} path="/delete-photos" />
        <Route element={<EditProfile />} path="/edit-profile/:id" /> */}
        <Route element={<AboutMe />} path="/about" />
        <Route element={<ContactUs />} path="/contact" />
        <Route element={<PhotosGallery />} path="/photos-gallery" />
      </Routes>
    </div>
  )
}

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default Root
