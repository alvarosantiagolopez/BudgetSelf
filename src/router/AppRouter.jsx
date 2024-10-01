// src/router/AppRouter.jsx

import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route path="/auth/*" element={<AuthRoutes />} />

            {/* Private routes */}
            <Route path="/*" element={<PrivateRoutes />} />
        </Routes>
    );
};
