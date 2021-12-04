import React, { useState } from 'react'
import '../css/Sidebar.css'
import SidebarRow from './SidebarRow'
import { useStateValue } from '../StateProvider'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags'
import PeopleIcon from '@mui/icons-material/People'
import ChatIcon from '@mui/icons-material/Chat'
import StorefrontIcon from '@mui/icons-material/Storefront'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'
import {ExpandMoreOutlined} from '@mui/icons-material'

function Sidebar() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName}/>
      <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 information center."/>
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow Icon={PeopleIcon} title="People"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="MarketPlace"/>
    </div>
  )
}

export default Sidebar
