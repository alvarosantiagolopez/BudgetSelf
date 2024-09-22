import { Modal, Box, Typography, Button, MenuItem, TextField, Select, FormControl, InputLabel } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { es } from 'date-fns/locale';

import { useForm, Controller } from 'react-hook-form';

import { useUiStore } from '../hooks';


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

    // React Hook Form
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            transactionType: 'Non-essential expense',
            paymentMethod: 'ING',
            category: '',
            date: new Date(),
            amount: 0,
        },
    });

    const onSubmit = (data) => {
        console.log('Form data:', data);
        // manejar la lógica para enviar los datos al servidor o actualizar el estado global
        closeTransactionModal();
    };

    const onCloseModal = () => {
        console.log('Cerrando modal');
        closeTransactionModal();
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

                    {/*Payment Method */}
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
                                    <MenuItem value="Gym membership">Gym membership</MenuItem>
                                    <MenuItem value="Food">Food</MenuItem>
                                    <MenuItem value="Transport">Transport</MenuItem>
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

                    {/* Amount */}
                    <TextField
                        label="Amount"
                        {...register('amount', { required: true })}
                        type="number"
                        fullWidth
                        sx={{
                            marginBottom: '2rem',
                            input: { fontWeight: 'bold' },
                        }}
                        error={!!errors.amount}
                        helperText={errors.amount ? 'Amount is required' : ''}
                    />

                    {/* Save button */}
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                paddingInline: "3.5rem",
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
