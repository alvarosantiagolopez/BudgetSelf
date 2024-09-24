import { Modal, Box, Typography, Button, MenuItem, TextField, Select, FormControl, InputLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { es } from 'date-fns/locale';

import { useForm, Controller } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

import { useTransactionsStore, useUiStore } from '../hooks';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius: '10px',
    p: 4,
};

export const TransactionModal = () => {

    const { isTransactionModalOpen, closeTransactionModal } = useUiStore();
    const { startAddingTransaction } = useTransactionsStore();

    // React Hook Form
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            transactionType: 'Non-essential expense',
            paymentMethod: 'ING',
            category: '',
            date: new Date(),
            description: '',
            amount: '',
        },
    });

    const onSubmit = (data) => {
        const newTransaction = {
            type: data.transactionType,
            paymentMethod: data.paymentMethod,
            category: data.category,
            date: data.date.toISOString(),
            description: data.description,
            amount: parseFloat(data.amount.replace(/,/g, '')), // Convert to number
        };

        // Add transaction to the state
        startAddingTransaction(newTransaction);
        closeTransactionModal();
        reset();
    };

    const onCloseModal = () => {
        closeTransactionModal();
        reset();
    };

    return (
        <Modal
            open={isTransactionModalOpen}
            onClose={onCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography
                    id="modal-modal-title"
                    variant="h5"
                    component="h2"
                    sx={{
                        textAlign: 'center',
                        marginBottom: '2rem',
                        fontWeight: 'bold',
                    }}
                >
                    New expense/income
                </Typography>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Transaction Type */}
                    <Controller
                        name="transactionType"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
                                <InputLabel id="transaction-type-label">Transaction type</InputLabel>
                                <Select
                                    {...field}
                                    labelId="transaction-type-label"
                                    label="Transaction type"
                                >
                                    <MenuItem value="Income">Income</MenuItem>
                                    <MenuItem value="Essential expense">Essential expense</MenuItem>
                                    <MenuItem value="Non-essential expense">Non-essential expense</MenuItem>
                                    <MenuItem value="Progress expense">Progress expense</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />

                    {/* Payment Method */}
                    <Controller
                        name="paymentMethod"
                        control={control}
                        render={({ field }) => (
                            <FormControl fullWidth sx={{ marginBottom: '1rem' }}>
                                <InputLabel id="payment-method-label">Payment method</InputLabel>
                                <Select
                                    {...field}
                                    labelId="payment-method-label"
                                    label="Payment method"
                                >
                                    <MenuItem value="ING">ING</MenuItem>
                                    <MenuItem value="Cash">Cash</MenuItem>
                                </Select>
                            </FormControl>
                        )}
                    />

                    {/* Category */}
                    <Controller
                        name="category"
                        control={control}
                        rules={{ required: 'Category is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <FormControl
                                fullWidth
                                sx={{ marginBottom: '1rem' }}
                                error={!!error}
                            >
                                <InputLabel id="category-label">Category</InputLabel>
                                <Select
                                    {...field}
                                    labelId="category-label"
                                    label="Category"
                                >
                                    <MenuItem value="Paycheck">Paycheck</MenuItem>
                                    <MenuItem value="Rent">Rent</MenuItem>
                                    <MenuItem value="Clothes">Clothes</MenuItem>
                                    <MenuItem value="Investments">Investments</MenuItem>
                                </Select>
                                {error && (
                                    <Typography variant="caption" color="error">
                                        {error.message}
                                    </Typography>
                                )}
                            </FormControl>
                        )}
                    />

                    {/* Date */}
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                        <Controller
                            name="date"
                            control={control}
                            rules={{ required: 'Date is required' }}
                            render={({ field, fieldState: { error } }) => (
                                <DatePicker
                                    label="Date"
                                    {...field}
                                    value={field.value}
                                    onChange={(newValue) => field.onChange(newValue)}
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                            sx: { marginBottom: '1rem' },
                                            error: !!error,
                                            helperText: error ? error.message : null,
                                        },
                                    }}
                                />
                            )}
                        />
                    </LocalizationProvider>

                    {/* Description */}
                    <TextField
                        label="Description"
                        {...register('description', { required: 'Description is required' })}
                        fullWidth
                        sx={{
                            marginBottom: '1rem',
                        }}
                        error={!!errors.description}
                        helperText={errors.description ? errors.description.message : ''}
                    />

                    {/* Amount */}
                    <Controller
                        name="amount"
                        control={control}
                        rules={{
                            required: 'Amount is required',
                            validate: (value) => {
                                const amount = parseFloat(value.replace(/,/g, ''));
                                return amount >= 0.01 || 'Amount must be at least 0.01';
                            },
                        }}
                        render={({ field: { onChange, name, value }, fieldState: { error } }) => (
                            <NumericFormat
                                value={value}
                                name={name}
                                label="Amount"
                                customInput={TextField}
                                fullWidth
                                sx={{
                                    marginBottom: '2rem',
                                    input: { fontWeight: 'bold' },
                                }}
                                thousandSeparator=","
                                decimalSeparator="."
                                decimalScale={2}
                                fixedDecimalScale
                                allowNegative={false}
                                error={!!error}
                                helperText={error ? error.message : ''}
                                onValueChange={(values) => {
                                    onChange(values.value);
                                }}
                            />
                        )}
                    />

                    {/* Save button */}
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                paddingInline: '3.5rem',
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderRadius: '20px',
                            }}
                        >
                            Save
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};
