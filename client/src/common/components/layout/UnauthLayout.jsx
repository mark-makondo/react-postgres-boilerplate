import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Navigation from "../../classes/Navigation";

function UnauthLayout() {
    const navigate = useNavigate();
    const [cookies] = useCookies(null); // eslint-disable-line no-unused-vars

    useEffect(() => {
        if (cookies.token) navigate(Navigation.AvailableRoutes.DASHBOARD.path);
    }, []);
    useEffect(() => {
        if (cookies.token) navigate(Navigation.AvailableRoutes.DASHBOARD.path);
    }, [cookies]);

    return (
        <div className="unauth-layout">
            <Outlet />
        </div>
    );
}

export default UnauthLayout;
