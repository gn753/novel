import NovelDetails from '@/components/NovelDetails'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/novel/details/:id',
        element: <NovelDetails />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      }
    ]
  }
])

export default router
