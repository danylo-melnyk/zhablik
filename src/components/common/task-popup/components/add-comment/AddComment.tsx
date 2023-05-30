import { FC } from 'react';
import { Avatar, Box, Input } from '@mui/material';

const AddComment: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#D5E8C5',
        padding: '16px',
        display: 'flex',
        gap: '16px',
        alignItems: 'start',
      }}
    >
      <Avatar
        sx={{
          backgroundColor: '#669669',
          color: 'primary.dark',
          fontWeight: '600',
          width: '28px',
          height: '28px',
          fontSize: '13px',
        }}
      >
        LO
      </Avatar>
      <Input placeholder="Start typing here..." sx={{ width: '100%' }} />
    </Box>
  );
};

export default AddComment;
