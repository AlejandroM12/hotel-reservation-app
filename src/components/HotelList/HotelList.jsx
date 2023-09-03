import { useQuery } from '@tanstack/react-query';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import listHotels from '../../hooks/useList';
import { Link } from 'wouter';
import { ContainerLayout } from '../../layouts';

const HotelList = () => {
  const isBetween768And1280 = useMediaQuery(
    '(min-width:768px) and (max-width:1279px)'
  );

  const {
    data: hotels,
    error,
    isLoading,
  } = useQuery({ queryKey: ['hotels'], queryFn: listHotels });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching hotels! {error.message}</div>;
  return (
    <ContainerLayout>
      <Stack
        spacing={2}
        component={'div'}
        sx={{
          disply: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: isBetween768And1280
            ? 'space-around'
            : 'space-between',
        }}
      >
        {hotels.map((hotel) => (
          <Link
            key={hotel.id}
            href={`/hotel/${hotel.id}`}
            style={{ flexBasis: 'calc(33.33% - 16px', margin: '8px' }}
          >
            <Card sx={{ maxWidth: 345, width: '100%', background: '#e8e8e8' }}>
              <CardMedia
                component='img'
                sx={{ height: 200, objectFit: 'cover' }}
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
                <Button size='small'>See Details</Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </Stack>
    </ContainerLayout>
  );
};

export default HotelList;
