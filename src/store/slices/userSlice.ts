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
    },
  },
})

export const { SIGN_IN } = userSlice.actions
export default userSlice.reducer
