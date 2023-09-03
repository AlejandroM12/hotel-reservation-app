import { useForm } from 'react-hook-form';
import { Typography, Input, Button, Stack } from '@mui/material';
import toast from 'react-hot-toast';
import useStore from '../../store/store';

const BookingForm = ({ hotel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const addReservation = useStore((state) => state.addReservation);

  const onSubmit = (data) => {
    addReservation(data);
    toast.success('Reservation made!');
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        flex
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={3}
      >
        <Input type='date' {...register('startDate', { required: true })} />
        {errors.startDate && (
          <Typography style={{ color: 'red' }}>
            Start Date is required
          </Typography>
        )}
        <Input type='date' {...register('endDate', { required: true })} />
        {errors.endDate && (
          <Typography style={{ color: 'red' }}>End Date is required</Typography>
        )}
      </Stack>
      <Button variant='contained' type='submit' sx={{ marginTop: 2 }}>
        Make Reservation
      </Button>
    </form>
  );
};

export default BookingForm;
