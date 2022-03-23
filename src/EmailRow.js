import { LabelImportantOutlined, StartOutlined } from '@mui/icons-material';
import { IconButton, Checkbox } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import './EmailRow.css';

const EmailRow = ({ title, subject, description, time }) => {

    const history = useNavigate();



    return (
        <div onClick={() => history("/mail")} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StartOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>{subject}</h4>
                <span className="emailRow__description">
                    {description}
                </span>
            </div>

            <p className="emailRow__time">{time}</p>
        </div>
    )
}

export default EmailRow