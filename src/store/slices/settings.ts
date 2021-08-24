import { createSlice } from "@reduxjs/toolkit"

const themes = ["light", "dark"]

const initialState = {
  theme: (() => {
    const theme = localStorage.getItem("theme")
    if (theme && themes.includes(theme)) return theme
    else {
      localStorage.setItem("theme", themes[0])
      return themes[0]
    }
  })(),
}

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    SET_THEME(state, { payload }) {
      state.theme = payload
      localStorage.setItem("theme", payload)
    },
  },
})

export const { SET_THEME } = settingsSlice.actions
export default settingsSlice.reducer
