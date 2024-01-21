import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/slice'
import countriesReducer from './countries/slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    countries: countriesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
