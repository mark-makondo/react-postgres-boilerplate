import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import UnauthLayout from "./components/layout/UnauthLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Navigation from "./classes/Navigation";
import "./stylesheets/index.scss";

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
