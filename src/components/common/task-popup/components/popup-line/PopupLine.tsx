import { FC, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface PopupLineProps {
  icon: ReactNode;
  text: string;
  content: ReactNode;
}

const PopupLine: FC<PopupLineProps> = ({ icon, text, content }) => {
  return (
    <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '140px',
          gap: '8px',
        }}
      >
        {icon}
        <Typography>{text}</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {content}
      </Box>
    </Box>
  );
};

export default PopupLine;
