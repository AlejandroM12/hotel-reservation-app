import { Container, Stack, Typography } from '@mui/material';

const ContainerLayout = ({ children }) => {
  return (
    <Container sx={{ marginTop: '5rem', marginBottom: '2rem' }}>
      <Stack flex alignItems={'center'} justifyContent={'center'}>
        <Typography variant='h2' component='h1' gutterBottom>
          Booking App
        </Typography>
        <Typography variant='h5' component='h2' gutterBottom>
          Find your next hotel
        </Typography>
        <Typography variant='body1'>
          Search for hotels and book your next stay.
        </Typography>
      </Stack>
      {children}
    </Container>
  );
};

export default ContainerLayout;
