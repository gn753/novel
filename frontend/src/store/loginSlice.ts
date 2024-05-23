import { IUserInfo } from '@/api/auths'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ILoginState {
  isLogin: boolean
  user: IUserInfo
}

const initialState: ILoginState = {
  isLogin: false,
  user: {
    userId: '',
    isAdmin: false,
    createdDt: ''
  }
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state: ILoginState, action: PayloadAction<IUserInfo>) => {
      state.user = action.payload
      state.isLogin = true
    },
    logout: (state: ILoginState) => {
      state.isLogin = false
      state.user = initialState.user
    }
  }
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer
