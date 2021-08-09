import { configureStore } from "@reduxjs/toolkit"
import settingsSlice from "./slices/settingsSlice"
import userReducer from "./slices/userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    settings: settingsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
