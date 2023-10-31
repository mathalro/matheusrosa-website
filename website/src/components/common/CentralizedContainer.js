import React from "react";
import "./CentralizedContainer.css"

const CentralizedContainer = ({ children }) => {
    return (
        <div className="centered-content">
            <div className="content">
                {children}
            </div>
        </div>
    );
};

export default CentralizedContainer;