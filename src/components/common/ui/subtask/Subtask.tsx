import { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';

import Circle from '@/components/common/ui/task-field/components/Circle';
import CrossedCircle from '@/components/common/ui/task-field/components/CrossedCircle';

interface SubtaskProps {
  text: string;
}

const Subtask: FC<SubtaskProps> = ({ text }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const CircleIcon = isCompleted ? CrossedCircle : Circle;
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '8px',
        padding: '4px 8px',
        svg: { width: '20px', height: '20px' },
        alignItems: 'center',
        color: 'primary.dark',
        cursor: 'pointer',
      }}
      onClick={() => setIsCompleted(!isCompleted)}
    >
      <CircleIcon />
      <Typography variant="body2" sx={{ lineHeight: '1' }}>
        {text}
      </Typography>
    </Box>
  );
};

export default Subtask;
