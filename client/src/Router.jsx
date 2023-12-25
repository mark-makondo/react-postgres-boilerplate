import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import UnauthLayout from "./components/layout/UnauthLayout";
import AuthLayout from "./components/layout/AuthLayout";
import Navigation from "./classes/Navigation";
import "./stylesheets/index.scss";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UnauthLayout />}>
                    {Navigation.UnauthRoutes.map((r, i) => (
                        <Route key={i} path={r.path} element={r.component} />
                    ))}
                </Route>
                <Route path="/" element={<AuthLayout />}>
                    {Navigation.AuthRoutes.map((r, i) => (
                        <Route key={i} path={r.path} element={r.component} />
                    ))}
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
