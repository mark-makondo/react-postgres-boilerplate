import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import UnauthLayout from "../common/components/layout/UnauthLayout";
import AuthLayout from "../common/components/layout/AuthLayout";
import Navigation from "../common/classes/Navigation";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UnauthLayout />}>
                    {Navigation.UnauthRoutes.map((r) => (
                        <Route key={r.path} path={r.path} element={<r.component />} />
                    ))}
                </Route>
                <Route path="/" element={<AuthLayout />}>
                    {Navigation.AuthRoutes.map((r) => (
                        <Route key={r.path} path={r.path} element={<r.component />} />
                    ))}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
