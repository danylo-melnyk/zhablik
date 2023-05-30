import { FC } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

interface CommentProps {
  name: string;
  date: string;
  text: string;
}

const Comment: FC<CommentProps> = ({ name, date, text }) => {
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
      <Box sx={{ display: 'flex', gap: '4px', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Typography variant="body2" fontWeight="600">
            {name}
          </Typography>
          <Typography fontSize="11px">{date}</Typography>
        </Box>
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};

export default Comment;
