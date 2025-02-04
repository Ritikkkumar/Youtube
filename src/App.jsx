import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import userContext from './utils/context'
import Signup from './components/signup'
import Createchannel from './components/channelcreate'
import Channel from './components/channel'
import Channeldetails from './components/channeldetails'

function App() {
  const [sidebarham,updatesidebarham]=useState(false);
  const [isloggedin,updateisloggedin]=useState(false);
  const [username,updateusername]=useState("");
  const [search,updatesearch]=useState("");
  const [userid,updateuserid]=useState("");

  return (
    <>
    <userContext.Provider value={{sidebar:sidebarham,updatesidebarham,
      logedin:isloggedin,updateisloggedin,
      username:username,updateusername,
      search:search,updatesearch,
      userid:userid,updateuserid
    }}>
    <Header></Header>
      <Outlet></Outlet>
      </userContext.Provider>
    </>
  )
}

export default App
