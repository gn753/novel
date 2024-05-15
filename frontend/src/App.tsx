import Header from '@/layouts/Header'
import router from '@/router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
