import { createSlice } from '@reduxjs/toolkit'

interface ILoginState {
  isLogin: boolean
}

const initialState: ILoginState = {
  isLogin: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state: ILoginState) => {
      state.isLogin = true
    },
    logout: (state: ILoginState) => {
      state.isLogin = false
    }
  }
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer
