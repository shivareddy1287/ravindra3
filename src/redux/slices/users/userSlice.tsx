import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import baseUrl from "../../../utils/baseUrl"
import type { PayloadAction } from "@reduxjs/toolkit"

// Define types for actions and state
interface UserData {
  email: string
  password: string
}

interface UserResponse {
  _id: string
  firstName: string
  lastName: string
  email: string
  token: string
  profilePhoto: string
  designation: string
  workPlace: string
  fatherName: string
  spouseName: string
  profession: string
  positionHeld: string
  specialIntrests: string
  phoneNo: string
  premanentAddress: string
  communicationAddress: string
}

interface User {
  id: string
  firstName: string
  lastName: string
  profilePhoto: string
  // profilePhoto: string
  designation: string
  workPlace: string
  fatherName: string
  spouseName: string
  profession: string
  positionHeld: string
  specialIntrests: string
  phoneNo: string
  premanentAddress: string
  communicationAddress: string
}

interface UserState {
  usersList: User[]
  userAuth: UserResponse | null
  loading: boolean
  appErr?: string
  serverErr?: string
  userDetails?: UserResponse | null
  profileUpdated?: UserResponse | null
  isUpdated?: boolean
  isUpdatedBio?: boolean
}

// Action for resetting profile updates
const resetProfileEdit = createAction("updateProfile/reset")
const resetProfileBioEdit = createAction("updateProfileBio/reset")

// loginUserAction thunk
export const loginUserAction = createAsyncThunk<
  UserResponse, // fulfilled response type
  UserData, // argument type
  { rejectValue: { message: string } } // rejected response type
>("user/login", async (userData, { rejectWithValue }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  try {
    const { data } = await axios.post<UserResponse>(
      `${baseUrl}/api/users/login`,
      userData,
      config,
    )
    sessionStorage.setItem("userInfo", JSON.stringify(data))

    return data // success return
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error.response.data)
  }
})

// Logout action
export const logoutAction = createAsyncThunk<
  void,
  void,
  { rejectValue: { message: string } }
>("/user/logout", async (_, { rejectWithValue }) => {
  try {
    sessionStorage.removeItem("userInfo")
  } catch (error: any) {
    if (!error?.response) {
      throw error
    }
    return rejectWithValue(error?.response?.data)
  }
})

// Fetch User details
export const fetchUserDetailsAction = createAsyncThunk<
  UserResponse, // fulfilled response type
  string, // argument type (user id)
  { rejectValue: { message: string } } // rejected response type
>("user/detail", async (id, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<UserResponse>(`${baseUrl}/api/users/${id}`)
    return data
  } catch (error: any) {
    if (!error?.response) throw error
    return rejectWithValue(error?.response?.data)
  }
})

// Fetch all users
export const fetchUsersAction = createAsyncThunk<
  User[], // fulfilled response type
  void, // no argument required
  { rejectValue: { message: string } } // rejected response type
>("user/list", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<User[]>(`${baseUrl}/api/users`)
    return data
  } catch (error: any) {
    if (!error?.response) throw error
    return rejectWithValue(error?.response?.data)
  }
})

// Update user profile
export const updateProfileAction = createAsyncThunk<
  UserResponse, // fulfilled response type
  {
    id: string
    firstName: string
    lastName: string
    email: string
    image: File | string
  }, // argument type
  { rejectValue: { message: string } } // rejected response type
>("user/update", async (user, { rejectWithValue, dispatch }) => {
  try {
    // console.log(user.image)

    const formData = new FormData()
    formData.append("firstName", user.firstName)
    formData.append("lastName", user.lastName)
    formData.append("email", user.email)
    formData.append("image", user.image)

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }

    const { data } = await axios.put<UserResponse>(
      `${baseUrl}/api/users/${user.id}`,
      formData,
      config,
    )
    dispatch(resetProfileEdit())

    return data
  } catch (error: any) {
    if (!error?.response) throw error
    return rejectWithValue(error?.response?.data)
  }
})

// Update user bio
export const updateProfileBioAction = createAsyncThunk<
  UserResponse, // fulfilled response type
  { id: string }, // argument type
  { rejectValue: { message: string } } // rejected response type
>("user/update/bio", async (user, { rejectWithValue, dispatch }) => {
  try {
    console.log(user)

    const { data } = await axios.put<UserResponse>(
      `${baseUrl}/api/users/bio/${user.id}`,
      user,
    )
    dispatch(resetProfileBioEdit())

    return data
  } catch (error: any) {
    if (!error?.response) throw error
    return rejectWithValue(error?.response?.data)
  }
})

// Get user from session storage
const userLoginFromStorage: UserResponse | null = sessionStorage.getItem(
  "userInfo",
)
  ? JSON.parse(sessionStorage.getItem("userInfo")!)
  : null

// Initial state
const initialState: UserState = {
  usersList: [],
  userAuth: userLoginFromStorage,
  loading: false,
  appErr: undefined,
  serverErr: undefined,
}

// Create the user slice
const userSlices = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // login action
    builder.addCase(loginUserAction.pending, state => {
      state.loading = true
      state.appErr = undefined
      state.serverErr = undefined
    })
    builder.addCase(
      loginUserAction.fulfilled,
      (state, action: PayloadAction<UserResponse>) => {
        state.userAuth = action.payload
        state.loading = false
      },
    )
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.appErr = action.payload?.message
      state.serverErr = action.error.message
      state.loading = false
    })

    // logout action
    builder.addCase(logoutAction.fulfilled, state => {
      state.userAuth = null
      state.loading = false
      state.appErr = undefined
      state.serverErr = undefined
    })

    // fetch user details

    //user details
    builder.addCase(fetchUserDetailsAction.pending, (state, action) => {
      state.loading = true
      state.appErr = undefined
      state.serverErr = undefined
    })
    builder.addCase(fetchUserDetailsAction.fulfilled, (state, action) => {
      state.loading = false
      state.userDetails = action?.payload
      state.appErr = undefined
      state.serverErr = undefined
    })
    builder.addCase(fetchUserDetailsAction.rejected, (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.appErr = action?.payload?.message
      state.serverErr = action?.error?.message
    })

    //All Users
    builder.addCase(fetchUsersAction.pending, (state, action) => {
      state.loading = true
      state.appErr = undefined
      state.serverErr = undefined
    })
    builder.addCase(fetchUsersAction.fulfilled, (state, action) => {
      state.loading = false
      state.usersList = action?.payload
      state.appErr = undefined
      state.serverErr = undefined
    })
    builder.addCase(fetchUsersAction.rejected, (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.appErr = action?.payload?.message
      state.serverErr = action?.error?.message
    })

    //update profile action
    builder.addCase(updateProfileAction.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(resetProfileEdit, (state, action) => {
      state.isUpdated = true
    })
    builder.addCase(updateProfileAction.fulfilled, (state, action) => {
      state.profileUpdated = action?.payload
      state.loading = false
      state.appErr = undefined
      state.serverErr = undefined
      state.isUpdated = false
    })
    builder.addCase(updateProfileAction.rejected, (state, action) => {
      state.loading = false
      state.appErr = action?.payload?.message
      state.serverErr = action?.error?.message
    })

    //Update User Bio
    builder.addCase(updateProfileBioAction.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(resetProfileBioEdit, (state, action) => {
      state.isUpdatedBio = true
    })
    builder.addCase(updateProfileBioAction.fulfilled, (state, action) => {
      state.profileUpdated = action?.payload
      state.loading = false
      state.appErr = undefined
      state.serverErr = undefined
      state.isUpdatedBio = false
    })
    builder.addCase(updateProfileBioAction.rejected, (state, action) => {
      state.loading = false
      state.appErr = action?.payload?.message
      state.serverErr = action?.error?.message
    })
  },
})

export default userSlices.reducer
