import { Navigate, Route, Routes } from 'react-router-dom';
import { BanksPage, CalculatorsPage, DashboardPage, InvestmentsPage } from '../../features';

export const FeaturesRoutes = () => {
    return (
        <Routes>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="banks" element={<BanksPage />} />
            <Route path="investments" element={<InvestmentsPage />} />
            <Route path="calculators" element={<CalculatorsPage />} />

            {/* Redirigir rutas no coincidentes */}
            <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    );
};
