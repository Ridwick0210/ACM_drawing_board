import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Landing from './Landing.jsx';
import { GoogleOAuthProvider} from '@react-oauth/google';


const router = createBrowserRouter([{
  path: '/',
  element: <Landing />
  },
  {
    path: 'drawing-board',
    element: < App />
  }
]);

const CLIENT_ID = "820403590363-64a6av2jde346p78bscnn0q4koo2eud2.apps.googleusercontent.com"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
    <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
