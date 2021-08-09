import { createSlice } from "@reduxjs/toolkit"
import Settings from "types/Settings"

const initialState: Settings = {
  lang: "vi",
  theme: "light",
}

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    SET_LANG(state, { payload }) {
      state.lang = payload
    },
  },
})

export const { SET_LANG } = settingsSlice.actions
export default settingsSlice.reducer
