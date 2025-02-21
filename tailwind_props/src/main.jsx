import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import { Children } from 'react'
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/user.jsx'


const router = createBrowserRouter([
  {

    path: '/',
    element: <Layout/>,
    children:[
      {
        path: "",
        element :<Home/>
      },{
        path: "about",
        element:<About/>
      },{
        path: "contact",
        element:<Contact/>
      },{
        path: "Github",
        element:<Github/>
      },{
        path: "User/:userid",
        element:<User/>
      }
    ]
      }
])

createRoot(document.getElementById('root')).render
  (
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)

