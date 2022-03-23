import React from 'react'
import './Header.css'
import { IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon style={{ height: '40px', width: '40px' }} />
                </IconButton>
                <a href="/">
                    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" />
                </a>
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input type="text" className="" placeholder="Search Mail" />
                <ArrowDropDownIcon />

            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <Avatar style={{ height: '24px', width: '24px' }} />
                </IconButton>
            </div>

        </div>
    )
}

export default Header