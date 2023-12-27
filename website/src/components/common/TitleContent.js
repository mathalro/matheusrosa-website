import React from "react";
import "./TitleContent.css";

import Button from 'react-bootstrap/Button';

const TitleContent = ({ name, menuAction }) => {
    return (
        <div className="title-content">
            <div className="title-name">{name}</div>
            {   menuAction != null ? 
                    <Button variant="btn btn-secondary" onClick={() => menuAction()}>CREATE</Button> : null }
        </div>
    );
};

export default TitleContent;