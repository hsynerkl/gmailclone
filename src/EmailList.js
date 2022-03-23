import React from 'react'
import './EmailList.css'
import { Checkbox, IconButton } from '@mui/material';
import { ArrowDropDown, ChevronLeft, ChevronRight, KeyboardHide, MoreVert, Redo, SettingsAccessibility, Inbox, People, LocalOffer } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings'
import Section from './Section'
import EmailRow from './EmailRow'


const EmailList = () => {
    return (
        <div className="emaillist">
            <div className="emaillist__settings">
                <div className="emaillist__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emaillist__settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emaillist__section">
                <Section Icon={Inbox} title="Primary" color="red" selected={true} />
                <Section Icon={People} title="Social" color="#1A73E8" />
                <Section Icon={LocalOffer} title="Promotions" color="green" />
            </div>
            <div className="emaillist__list">
                <EmailRow
                    title="Github"
                    subject="Check out my other projects"
                    description=" github.com/hsynerkl "
                    time="10pm"
                />
                <EmailRow
                    title="Linkedin"
                    subject="Check out my other projects"
                    description="linkedin.com/in/huseyinerkal"
                    time="10pm"
                />
                <EmailRow
                    title="Instagram"
                    subject="HEY"
                    description="contact me"
                    time="10pm"
                />
            </div>
        </div>
    )
}

export default EmailList