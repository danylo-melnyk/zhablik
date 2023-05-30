import { FC } from 'react';
import { Person } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

interface AccountLineProps {
  isChosen: boolean;
  name: string;
}

const AccountLine: FC<AccountLineProps> = ({ isChosen, name }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '8px',
        ...(isChosen && {
          backgroundColor: '#E0CCDE',
        }),
        width: '100%',
        transition: 'all 0.2s ease-in-out',
        cursor: 'pointer',
        padding: '4px',
        borderRadius: '4px',
        '&:hover': {
          backgroundColor: '#E0CCDE',
        },
      }}
    >
      <Person />
      <Typography color="primary.dark">{name}</Typography>
      {isChosen && <Typography color="#626262">(chosen)</Typography>}
    </Box>
  );
};

export default AccountLine;
