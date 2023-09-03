import { Container, Stack } from '@mui/material';

const ContainerDetail = ({ children }) => {
  return (
    <Container sx={{ marginTop: '5rem' }}>
      <Stack
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {children}
      </Stack>
    </Container>
  );
};

export default ContainerDetail;
