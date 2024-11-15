import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import baseUrl from "../../../utils/baseUrl"
import type { RootState } from "../../store/store"

// Define Photo type (adjust based on actual API response)
interface Photo {
  _id: string
  url: string
  name: string
  userId: string
  date: string
  image: string
}

// Define API Response types
interface PhotosResponse {
  message: string
  photos: Photo[]
}

interface DeletePhotosResponse {
  message: string
}

// Redux slice state interface
interface PhotosState {
  loading: boolean
  appErr?: string
  serverErr?: string
  photosUploaded: PhotosResponse | null
  allPhotos: Photo[] | null
  isUploaded: boolean
  isDeleted: boolean
  deletedPhotos: DeletePhotosResponse | null
}

// Reset Actions
const resetUploadPhotos = createAction("uploadPhotos/reset")
const resetDeletePhotos = createAction("deletePhotos/reset")

export const uploadPhotosAction = createAsyncThunk<
  PhotosResponse,
  FormData, // Accept FormData here
  { rejectValue: { message: string } }
>("photos/upload", async (formData, { rejectWithValue, dispatch }) => {
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }

    const { data } = await axios.post(
      `${baseUrl}/api/photos/upload`,
      formData,
      config,
    )

    dispatch(resetUploadPhotos())

    return data
  } catch (error: any) {
    if (!error?.response) throw error
    return rejectWithValue(error?.response?.data)
  }
})

// Fetch Photos Action
export const fetchPhotosAction = createAsyncThunk<
  Photo[], // Success response type
  void, // No arguments
  { rejectValue: { message: string } } // Rejected response type
>("photos/list", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`${baseUrl}/api/photos`)
    return data
  } catch (error: any) {
    if (!error?.response) throw error
    return rejectWithValue(error?.response?.data)
  }
})

// Delete Photos Action

export const deletePhotosAction = createAsyncThunk<
  DeletePhotosResponse, // Success response type
  string[], // Array of photo IDs to delete
  { rejectValue: { message: string } } // Rejected response type
>(
  "photos/delete",
  async (photoIds, { rejectWithValue, getState, dispatch }) => {
    console.log(photoIds)

    const state = getState() as RootState // Explicitly type the state
    const user = state.users // Access the users state
    console.log("users", user)

    const { userAuth } = user
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    }

    try {
      const { data } = await axios.delete(
        `${baseUrl}/api/photos?ids=${photoIds.join(",")}`,
        config,
      )
      dispatch(resetDeletePhotos())
      return data
    } catch (error: any) {
      if (!error?.response) throw error
      return rejectWithValue(error?.response?.data)
    }
  },
)

// Initial state
const initialState: PhotosState = {
  loading: false,
  appErr: undefined,
  serverErr: undefined,
  photosUploaded: null,
  allPhotos: null,
  isUploaded: false,
  isDeleted: false,
  deletedPhotos: null,
}

// Photos Slice
const photosSlices = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Upload Photos Cases
      .addCase(uploadPhotosAction.pending, state => {
        state.loading = true
      })
      .addCase(resetUploadPhotos, (state, action) => {
        state.isUploaded = true
      })
      .addCase(
        uploadPhotosAction.fulfilled,
        (state, action: PayloadAction<PhotosResponse>) => {
          state.photosUploaded = action.payload
          state.loading = false
          state.isUploaded = false
          state.appErr = undefined
          state.serverErr = undefined
        },
      )
      .addCase(uploadPhotosAction.rejected, (state, action) => {
        state.loading = false
        state.appErr = action.payload?.message
        state.serverErr = action.error?.message
      })
      // Fetch Photos Cases
      .addCase(fetchPhotosAction.pending, state => {
        state.loading = true
      })
      .addCase(
        fetchPhotosAction.fulfilled,
        (state, action: PayloadAction<Photo[]>) => {
          state.allPhotos = action.payload
          state.loading = false
          state.appErr = undefined
          state.serverErr = undefined
        },
      )
      .addCase(fetchPhotosAction.rejected, (state, action) => {
        state.loading = false
        state.appErr = action.payload?.message
        state.serverErr = action.error?.message
      })
      // Delete Photos Cases
      .addCase(deletePhotosAction.pending, state => {
        state.isDeleted = true
      })
      .addCase(resetDeletePhotos, (state, action) => {
        state.isDeleted = true
      })
      .addCase(
        deletePhotosAction.fulfilled,
        (state, action: PayloadAction<DeletePhotosResponse>) => {
          state.deletedPhotos = action.payload
          state.isDeleted = false
          state.loading = false
          state.appErr = undefined
          state.serverErr = undefined
        },
      )
      .addCase(deletePhotosAction.rejected, (state, action) => {
        state.loading = false
        state.appErr = action.payload?.message
        state.serverErr = action.error?.message
      })
  },
})

export default photosSlices.reducer
