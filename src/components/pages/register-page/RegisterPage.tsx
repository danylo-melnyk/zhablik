import { FC } from 'react';
import { Box, Button, Divider, TextField, Typography } from '@mui/material';

import GoogleIcon from '@/components/pages/login-page/components/GoogleIcon';

const RegisterPage: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          width: '80%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            width: '350px',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            sx={{
              height: 300,
              width: 300,
            }}
            src="frog.png"
          />
          <Typography
            color="primary.dark"
            fontWeight="600"
            variant="h5"
            textAlign="center"
          >
            Have an account already? <br /> Log in here
          </Typography>
          <Button
            sx={{
              backgroundColor: 'primary.dark',
              color: 'secondary.main',
              '&:hover, &:active, &:focus': {
                backgroundColor: 'primary.dark',
              },
              textTransform: 'none',
              padding: '10px 16px',
              fontSize: '16px',
              width: '100%',
            }}
          >
            Join Us
          </Button>
        </Box>

        <Divider
          sx={{
            height: '500px',
            width: '1px',
            '&::before, &::after': {
              borderColor: 'primary.dark',
            },
          }}
          orientation="vertical"
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            width: '350px',
            alignItems: 'center',
          }}
        >
          <Typography color="primary.dark" variant="h2">
            Join Us
          </Typography>
          <Button
            sx={{
              backgroundColor: 'primary.dark',
              color: 'secondary.main',
              '&:hover, &:active, &:focus': {
                backgroundColor: 'primary.dark',
              },
              textTransform: 'none',
              padding: '10px 16px',
              fontSize: '16px',
              width: '100%',
            }}
            startIcon={<GoogleIcon />}
          >
            Sign up with Google
          </Button>
          <Divider
            sx={{
              width: '100%',
              '&::before, &::after': {
                borderColor: 'primary.dark',
              },
            }}
          >
            or
          </Divider>
          <TextField
            placeholder="GDTK"
            label="Username"
            sx={{ width: '100%' }}
          />
          <TextField
            placeholder="lol123123"
            label="Email"
            sx={{ width: '100%' }}
          />
          <TextField
            placeholder="lol123123"
            label="Password"
            sx={{ width: '100%' }}
          />
          <TextField
            placeholder="lol123123"
            label="Password confirmation"
            sx={{ width: '100%' }}
          />

          <Button
            sx={{
              backgroundColor: 'primary.dark',
              color: 'secondary.main',
              '&:hover, &:active, &:focus': {
                backgroundColor: 'primary.dark',
              },
              textTransform: 'none',
              padding: '10px 16px',
              fontSize: '16px',
              width: '100%',
            }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
