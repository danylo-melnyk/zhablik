import { FC } from 'react';
import { Box, Typography } from '@mui/material';

const DevPage: FC = () => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 60px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography color="primary.dark" variant="h4">
        We are still developing this page...
      </Typography>
      <Box
        component="img"
        sx={{
          height: 300,
          width: 300,
        }}
        src="frog.png"
      />
    </Box>
  );
};

export default DevPage;
