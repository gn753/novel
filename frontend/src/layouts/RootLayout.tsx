import { Container } from '@mui/material'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <Container maxWidth="xs">
      <Outlet />
    </Container>
  )
}

export default RootLayout
