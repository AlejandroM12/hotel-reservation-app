import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'wouter';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ padding: 0, margin: 0 }}>
        <Toolbar sx={{ paddingLeft: 0, paddingRight: 0 }}>
          <Typography
            variant='h6'
            component={Link}
            to='/'
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}
          >
            BOOKING APP
          </Typography>
          <Button color='inherit' component={Link} to='/'>
            Home
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
