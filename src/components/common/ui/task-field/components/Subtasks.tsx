import { FC, useState } from 'react';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { Box } from '@mui/material';

import Subtask from '@/components/common/ui/subtask';
import Tag from '@/components/common/ui/tag';

const Subtasks: FC<{ subtasks: string[] }> = ({ subtasks }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Box
      sx={{
        width: '100%',
        marginTop: '11px',
      }}
    >
      {isOpened ? (
        <Tag
          text="Close subtasks"
          icon={<ArrowUpward />}
          onClick={() => setIsOpened(false)}
        />
      ) : (
        <Tag
          text="Open subtasks"
          icon={<ArrowDownward />}
          onClick={() => setIsOpened(true)}
        />
      )}
      {isOpened && (
        <Box
          sx={{
            border: '2px solid #143E35',
            borderRadius: '4px',
            marginTop: '4px',
          }}
        >
          {subtasks?.map((subtask, index) => (
            <Subtask text={subtask} key={index} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Subtasks;
