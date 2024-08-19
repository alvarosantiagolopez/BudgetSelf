import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { FeaturesRoutes } from '../features';



export const AppRouter = () => {
    return (
        <>
            <Routes>

                {/* Login and Register */}
                <Route path="auth/*" element={<AuthRoutes />} />

                {/* BudgetApp */}
                <Route path="/*" element={<FeaturesRoutes />} />

            </Routes>


        </>
    )
}
