import { useAppDispatch } from '@/store/hooks'
import { logout } from '@/store/loginSlice'

const useLogin = () => {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleLogin = () => {}

  return { handleLogout, handleLogin }
}

export default useLogin
