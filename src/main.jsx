import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Router/Router'
import AuthProvider from './Context/AuthContext/AuthProvider'
import { Slide, ToastContainer } from 'react-toastify'
import ClientThemeWraper from './Theme/ClientThemeWraper'
import ThemeProvider from './Theme/ThemeProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <ClientThemeWraper>
          <RouterProvider router={router}></RouterProvider>
        </ClientThemeWraper>
      </ThemeProvider>
    </AuthProvider>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Slide}
    />
  </StrictMode>,
)
