import React from "react";
import { useCookies } from "react-cookie";

function Dashboard() {
    const [cookie, setCookie, removeCookie] = useCookies(null); // eslint-disable-line no-unused-vars

    const handleLogout = () => {
        removeCookie("email");
        removeCookie("token");
    };

    return (
        <div>
            <button type="button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;
