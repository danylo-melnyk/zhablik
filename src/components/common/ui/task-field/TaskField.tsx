import { FC, useState } from 'react';
import {
  CalendarMonth,
  Comment,
  LocalOffer,
  Loop,
  MoreHoriz,
  Notifications,
} from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

import Tag from '@/components/common/ui/tag';
import Circle from '@/components/common/ui/task-field/components/Circle';
import CrossedCircle from '@/components/common/ui/task-field/components/CrossedCircle';
import Subtasks from '@/components/common/ui/task-field/components/Subtasks';
import useAddTask from '@/hooks/use-add-task';
import { TaskDifficulty } from '@/types/task';

import * as styles from './TaskField.styles';

interface TaskFieldProps {
  difficulty: TaskDifficulty;
  name: string;
  description: string;
  date?: string;
  tags?: string[];
  notification: boolean;
  repetitiveness?: string;
  subtasks?: string[];
}

const ColorMap: Record<TaskDifficulty, string> = {
  [TaskDifficulty.EASY]: '#54D077',
  [TaskDifficulty.MEDIUM]: '#ECB562',
  [TaskDifficulty.HARD]: '#EF5F5F',
};

const TaskField: FC<TaskFieldProps> = task => {
  const { showPopup } = useAddTask();
  const [isCompleted, setIsCompleted] = useState(false);

  const CircleIcon = isCompleted ? CrossedCircle : Circle;

  const handleClick = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <Box sx={styles.wrapper}>
      <IconButton
        sx={{ width: '36px', height: '36px', padding: '0' }}
        onClick={handleClick}
      >
        <CircleIcon style={{ color: ColorMap[task.difficulty] }} />
      </IconButton>

      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
        <Typography color="primary.dark" sx={{ fontWeight: '600' }}>
          {task.name}
        </Typography>
        <Typography color="primary.dark">{task.description}</Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
          }}
        >
          {task.date && <Tag icon={<CalendarMonth />} text={task.date} />}
          {task.tags?.map((tag, index) => (
            <Tag key={index} icon={<LocalOffer />} text={tag} />
          ))}
          {task.repetitiveness && (
            <Tag icon={<Loop />} text={task.repetitiveness} />
          )}
          {task.notification && <Notifications />}
        </Box>

        {task.subtasks && <Subtasks subtasks={task.subtasks} />}
        <Box></Box>
      </Box>

      <Box sx={{ gap: '8px', display: 'flex' }}>
        <IconButton
          onClick={showPopup}
          sx={{ width: '36px', height: '36px', color: 'primary.dark' }}
        >
          <Comment sx={{ width: '20px', height: '20px' }} />
        </IconButton>
        <IconButton
          onClick={showPopup}
          sx={{ width: '36px', height: '36px', color: 'primary.dark' }}
        >
          <MoreHoriz sx={{ width: '20px', height: '20px' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TaskField;
