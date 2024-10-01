import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavBar } from '../components/NavBar';
import { BudgetsRoutes } from '../features';
import { FeaturesRoutes } from '../features/routes/FeaturesRoutes';

export const PrivateRoutes = () => {
    const { status } = useSelector((state) => state.auth);

    if (status !== 'authenticated') {
        return <Navigate to="/auth/login" />;
    }

    return (
        <>
            <NavBar />

            <Routes>
                {/* BudgetsRoutes */}
                <Route path="budgets/*" element={<BudgetsRoutes />} />

                {/*BudgetApp */}
                <Route path="/*" element={<FeaturesRoutes />} />
            </Routes>
        </>
    );
};
