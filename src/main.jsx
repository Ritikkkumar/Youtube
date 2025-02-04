import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Videodetail from './components/Videodetail.jsx'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Signup from './components/signup.jsx'
import Createchannel from './components/channelcreate.jsx'
import Channel from './components/channel.jsx'
import Channeldetails from './components/channeldetails.jsx'


const appRouter=createBrowserRouter([
  
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/video/:id",
        element:<Videodetail/>
      },
      {
        path:"/signin",
        element:<Signup/>
      },
      {
        path:"/addchannel",
        element:<Createchannel></Createchannel>
      },
      {
        path:"/channel",
        element:<Channel></Channel>
      },
      {
        path:"/channeldetails/:id",
        element:<Channeldetails></Channeldetails>
      }
    ]
  },
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
