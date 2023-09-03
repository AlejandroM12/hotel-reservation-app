import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';
import fetchHotelDetail from '../../hooks/useHotelDetail';
import { BookingForm } from '../BookingForm';
import { ContainerDetail } from '../../layouts';

const HotelDetails = () => {
  const [match, params] = useRoute('/hotel/:id');

  const hotelId = match && params ? params.id : null;

  const {
    data: hotel,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['hotel', hotelId],
    queryFn: () => fetchHotelDetail(hotelId),
    enabled: !!hotelId,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching hotel! {error.message}</div>;

  return (
    <ContainerDetail>
      <Card sx={{ maxWidth: 345, background: '#e8e8e8' }}>
        <CardMedia
          component='img'
          sx={{ height: 140 }}
          image={hotel.image}
          title={hotel.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {hotel.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {hotel.description}
          </Typography>
        </CardContent>
        <CardActions>
          <BookingForm hotel={hotel} />
        </CardActions>
      </Card>
    </ContainerDetail>
  );
};

export default HotelDetails;
