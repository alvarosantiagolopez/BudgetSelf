import { useState } from 'react';

export const useMonths = () => {

    // List of months
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Actual month
    const currentMonthIndex = new Date().getMonth();
    const currentMonth = months[currentMonthIndex];

    const [selectedMonth, setSelectedMonth] = useState(currentMonth);

    // Months full name
    const monthNames = {
        Jan: 'January',
        Feb: 'February',
        Mar: 'March',
        Apr: 'April',
        May: 'May',
        Jun: 'June',
        Jul: 'July',
        Aug: 'August',
        Sep: 'September',
        Oct: 'October',
        Nov: 'November',
        Dec: 'December',
    };

    const data = {};
    const transactions = [];

    // Get month data
    const monthData = data[selectedMonth] || { income: '€0.00', expenses: '€0.00', savings: '€0.00' };
    const monthTransactions = transactions[selectedMonth] || [];

    // Get index month
    const selectedMonthIndex = months.indexOf(selectedMonth);

    // Get full name
    const selectedMonthFullName = monthNames[selectedMonth];


    return {
        selectedMonth,
        setSelectedMonth,
        months,
        monthData,
        monthTransactions,
        selectedMonthFullName,
        selectedMonthIndex,
    };
};
