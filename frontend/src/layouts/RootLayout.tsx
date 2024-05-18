import { Container } from '@mui/material'
import { Outlet } from 'react-router'
import Header from '@/layouts/Header'
import Searchbar from '@/components/Searchbar'

const RootLayout = () => {
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
