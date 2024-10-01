import { Navigate, Route, Routes } from 'react-router-dom';
import {
    BudgetsPage,
    EssentialExpensesPage,
    IncomePage,
    NonEssentialExpensesPage,
    ProgressExpensesPage,
} from '../budgets/pages';

export const BudgetsRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<BudgetsPage />} />
            <Route path="income" element={<IncomePage />} />
            <Route path="essential-expenses" element={<EssentialExpensesPage />} />
            <Route path="non-essential-expenses" element={<NonEssentialExpensesPage />} />
            <Route path="progress-expenses" element={<ProgressExpensesPage />} />

            {/* Redirigir rutas no coincidentes */}
            <Route path="*" element={<Navigate to="" />} />
        </Routes>
    );
};
