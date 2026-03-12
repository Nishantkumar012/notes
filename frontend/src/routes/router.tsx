import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Notes from '../pages/NotesPage'
import Dashboard from '../pages/Dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children: [
    //     {path: "login", element: <Login/>}
    // ]
  },

  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/signup',
    element: <Signup />,
  
  },

  {
    path: '/notes',
    element: <Notes />,
  },
  {
    path: '/dash',
    element: <Dashboard />,
  },
])
