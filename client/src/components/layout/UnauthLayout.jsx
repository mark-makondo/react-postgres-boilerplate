import React from "react";
import { Outlet } from "react-router-dom";

const UnauthLayout = () => {
    return (
        <div className="unauth-layout">
            <Outlet />
        </div>
    );
};

export default UnauthLayout;
