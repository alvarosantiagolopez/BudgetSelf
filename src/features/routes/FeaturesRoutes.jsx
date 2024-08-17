import { Navigate, Route, Routes } from 'react-router-dom';
import { BanksPage, BudgetsPage, CalculatorsPage, DashboardPage, InvestmentsPage } from '../../features'
import { NavBar } from '../../components/NavBar';



export const FeaturesRoutes = () => {
    return (
        <>

            <NavBar />

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
