import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { ToastWrapper } from 'keep-react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  <ToastWrapper
        richColors={true}
        toastOptions={{
        classNames: {
          title: 'text-body-3 font-medium',
          toast: 'rounded-xl shadow-large',
          description: 'text-body-4 font-normal',
        },
      }} />
  </StrictMode>,
)
