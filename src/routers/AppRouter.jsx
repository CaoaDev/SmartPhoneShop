import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublickRoute } from "./PublickRoute";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route path='/login' element={
                    <PublickRoute >
                        <LoginScreen />
                    </PublickRoute >
                    }
                />
                <Route path='/*' element={
                    <PrivateRoute >
                        <DashBoardRoutes />
                    </PrivateRoute >
                    }
                />
                {/* <Route path='/*' element={<DashBoardRoutes />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
