import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "types/User"

const initialState: User = {
  email: "",
  image: "",
  name: "",
  token: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SIGN_IN(state, { payload }: PayloadAction<User>) {
      state.email = payload.email
      state.image = payload.image
      state.name = payload.name
      state.token = payload.token
    },
  },
})

export const { SIGN_IN } = userSlice.actions
export default userSlice.reducer
