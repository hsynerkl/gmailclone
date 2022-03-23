import React from 'react'
import './Sidebar.css';
import { Button } from '@mui/material';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'
import InboxIcon from '@mui/icons-material/Inbox'
import StarIcon from '@mui/icons-material/Star'
import NearMeIcon from '@mui/icons-material/NearMe'
import NoteIcon from '@mui/icons-material/Note'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import SidebarOption from './SidebarOption';
import { LabelImportant } from '@mui/icons-material';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__compose" >
                <Button startIcon={<AddIcon fontSize='large' />}>
                    Compose
                </Button>
            </div>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarIcon} title="Starred" number={11} />
            <SidebarOption Icon={AccessTimeFilledIcon} title="Snoozed" number={5} />
            <SidebarOption Icon={LabelImportant} title="Important" number={0} />
            <SidebarOption Icon={NearMeIcon} title="Sent" number={45} />
            <SidebarOption Icon={NoteIcon} title="Drafts" number={22} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={3} />

            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>

        </div>

    )
}

export default Sidebar