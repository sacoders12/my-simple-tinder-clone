import React from 'react'
import './header.css'
import PersonIcon from '@material-ui/icons/Person'
import { IconButton } from '@material-ui/core'
import { ForumOutlined } from '@material-ui/icons'


const Header = () => {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon' />
        </IconButton>
       <img
            className='header__logo'
            src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'
       />
       <IconButton>
            <ForumOutlined fontSize='large' className='header__icon'  />
       </IconButton>
       
    </div>
  )
}

export default Header
