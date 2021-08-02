import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "types/User"

const initialState: User = {
  user: {
    email: "",
    image: "",
    name: "",
  },
  token: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SIGN_IN(state, { payload }: PayloadAction<User>) {
      state.user = { ...payload.user }
      state.token = payload.token
      localStorage.setItem("token", payload.token)
    },
    SIGN_OUT(state) {
      state.user = { ...initialState.user }
      state.token = ""
      localStorage.removeItem("token")
    },
  },
})

export const { SIGN_IN, SIGN_OUT } = userSlice.actions
export default userSlice.reducer
