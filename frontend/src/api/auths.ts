import instance from './instance'
interface IUserLogin {
  userId: string
  password: string
}

export interface IUserInfo {
  userId: string
  createdDt?: string
  isAdmin?: boolean
}
//유저 정보, 인증처리
export const getUserInfo: () => Promise<IUserInfo> = async () => {
  const res = await instance.get('/auth/userInfo')
  return res.data
}

// 회원가입

export const postUserRegister: (
  userDto: IUserInfo
) => Promise<IUserInfo> = async userDto => {
  const res = await instance.post('/auth/register', userDto)

  return res.data
}

export const postUserLogin = async (userDto: IUserLogin) => {
  const res = await instance.post('/auth/login', userDto)

  return res.data
}

//로그인
