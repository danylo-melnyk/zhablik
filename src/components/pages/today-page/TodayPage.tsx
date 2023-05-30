import { FC } from 'react';
import { Box, Button, Typography } from '@mui/material';

import TaskField from '@/components/common/ui/task-field';
import useAddTask from '@/hooks/use-add-task';
import { TaskDifficulty } from '@/types/task';

import * as styles from './TodayPage.styles';

const TodayPage: FC = () => {
  const { showPopup } = useAddTask();

  return (
    <Box sx={styles.wrapper}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'column',
          width: '100%',
          gap: '8px',
        }}
      >
        <Typography
          variant="h5"
          color="primary.dark"
          sx={{ fontWeight: '600', marginBottom: '8px' }}
        >
          Home
        </Typography>
        <TaskField
          difficulty={TaskDifficulty.EASY}
          description="some description"
          name="LOL"
          tags={['lol', 'haha', 'muha']}
          subtasks={['??????', 'LOOOOOOOOOL', 'phphph']}
          notification
        />
        <TaskField
          difficulty={TaskDifficulty.EASY}
          description="some description"
          name="LOL"
          tags={['lol', 'haha', 'muha']}
          notification={false}
        />
        <TaskField
          difficulty={TaskDifficulty.EASY}
          description="some description"
          name="LOL"
          tags={['lol', 'haha', 'muha']}
          notification={false}
          repetitiveness="Sunday"
        />
        <TaskField
          difficulty={TaskDifficulty.MEDIUM}
          description="some description"
          name="LOL"
          tags={['lol', 'haha', 'muha']}
          notification={true}
          repetitiveness="Tuesday"
        />
        <TaskField
          difficulty={TaskDifficulty.HARD}
          description="some description"
          name="LOL"
          tags={['lol', 'haha', 'muha']}
          notification={true}
        />
        <Button
          sx={{
            backgroundColor: 'primary.dark',
            marginTop: '16px',
            color: 'secondary.main',
            '&:hover, &:active, &:focus': {
              backgroundColor: 'primary.dark',
            },
            textTransform: 'none',
            padding: '10px 16px',
            fontSize: '14px',
          }}
          onClick={showPopup}
        >
          Add task
        </Button>
      </Box>
    </Box>
  );
};

export default TodayPage;
