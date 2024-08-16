import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { FeaturesRoutes } from '../features';



export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="login" element={<LoginPage />} />

                <Route path="/*" element={<FeaturesRoutes />} />

            </Routes>


        </>
    )
}
