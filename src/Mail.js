import React from 'react'
import './Mail.css'
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmailIcon from '@mui/icons-material/Email';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PrintIcon from '@mui/icons-material/Print';
import { useNavigate } from 'react-router-dom'
import { ExitToApp, LabelImportant, MoreVert, MoveToInbox, UnfoldMore } from '@mui/icons-material';

const Mail = () => {
    const history = useNavigate();

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history('/')}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <ErrorIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EmailIcon />
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyheader">
                    <h2>Subject</h2>
                    <LabelImportant className="mail__important" />
                    <p>title</p>
                    <p className="mail__time" style={{ fontSize: '12px' }}>10pm</p>
                </div>
                <div className="mail__message" >
                    this is a message
                </div>
            </div>
        </div>
    )
}

export default Mail