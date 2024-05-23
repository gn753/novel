import loginSlice from '@/store/loginSlice'
import { configureStore } from '@reduxjs/toolkit'
import reviewSlice from './reviewSlice'

export const store = configureStore({
  reducer: {
    logins: loginSlice,
    reviews: reviewSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
