import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  lang: "vi",
  theme: "light",
}

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    SET_THEME(state, { payload }) {
      state.theme = payload
    },
  },
})

export const { SET_THEME } = settingsSlice.actions
export default settingsSlice.reducer
