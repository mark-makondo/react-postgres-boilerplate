import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Navigation from "../../classes/Navigation";

function AuthLayout() {
    const navigate = useNavigate();
    const [cookies] = useCookies(null); // eslint-disable-line no-unused-vars

    useEffect(() => {
        if (!cookies.token) navigate(Navigation.AvailableRoutes.SIGNIN.path);
    }, []);
    useEffect(() => {
        if (!cookies.token) navigate(Navigation.AvailableRoutes.SIGNIN.path);
    }, [cookies]);

    return (
        <div className="auth-layout">
            <Outlet />
        </div>
    );
}

export default AuthLayout;
