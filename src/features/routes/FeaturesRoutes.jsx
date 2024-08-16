import { Navigate, Route, Routes } from 'react-router-dom';
import { BanksPage, BudgetsPage, CalculatorsPage, DashboardPage, InvestmentsPage } from '../../features'



export const FeaturesRoutes = () => {
    return (
        <>

            {/* TODO: Navbar */}

            <Routes>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="budgets" element={<BudgetsPage />} />
                <Route path="banks" element={<BanksPage />} />
                <Route path="investments" element={<InvestmentsPage />} />
                <Route path="calculators" element={< CalculatorsPage />} />

                <Route path="/*" element={<Navigate to="/dashboard" />} />

            </Routes>

        </>
    )
}
