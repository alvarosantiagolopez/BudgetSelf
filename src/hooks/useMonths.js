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

    // Datos simulados para cada mes
    const data = {
        Jan: { income: '€1,800.00', expenses: '€400.00', savings: '€1,400.00' },
        Feb: { income: '€2,200.00', expenses: '€300.00', savings: '€1,900.00' },
        Mar: { income: '€2,000.00', expenses: '€500.00', savings: '€1,500.00' },
        Apr: { income: '€2,000.00', expenses: '€205.00', savings: '€1,795.00' },
        May: { income: '€2,100.00', expenses: '€450.00', savings: '€1,650.00' },
        Jun: { income: '€1,950.00', expenses: '€350.00', savings: '€1,600.00' },
        Jul: { income: '€2,050.00', expenses: '€400.00', savings: '€1,650.00' },
        Aug: { income: '€2,100.00', expenses: '€300.00', savings: '€1,800.00' },
        Sep: { income: '€2,000.00', expenses: '€630.00', savings: '€1,370.00' },
        Oct: { income: '€2,200.00', expenses: '€400.00', savings: '€1,800.00' },
        Nov: { income: '€2,000.00', expenses: '€350.00', savings: '€1,650.00' },
        Dec: { income: '€2,100.00', expenses: '€450.00', savings: '€1,650.00' },
    };

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
