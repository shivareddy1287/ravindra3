import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "../slices/users/userSlice"
import photos from "../slices/photos/photosSlice"

const store = configureStore({
  reducer: {
    users: usersReducer, // Ensure the users reducer is added here
    photos,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
