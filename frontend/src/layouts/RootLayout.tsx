import { Container } from '@mui/material'
import { Outlet } from 'react-router'
import Header from '@/layouts/Header'
import Searchbar from '@/components/Searchbar'
import { useEffect } from 'react'
import { getUserInfo } from '@/api/auths'
import { useAppDispatch } from '@/store/hooks'
import { login } from '@/store/loginSlice'

const RootLayout = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    getUserInfo().then(res => {
      dispatch(login(res))
    })
  }, [dispatch])

  return (
    <>
      <Header />
      <Searchbar />
      <Container maxWidth="xs">
        <Outlet />
      </Container>
    </>
  )
}

export default RootLayout
