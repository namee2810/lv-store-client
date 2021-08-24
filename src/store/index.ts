import { configureStore } from "@reduxjs/toolkit"
import settingsReducer from "./slices/settings"
import userReducer from "./slices/user"

export const store = configureStore({
  reducer: {
    user: userReducer,
    settings: settingsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
