import { FC } from 'react';
import {
  Add,
  AddTask,
  CalendarMonth,
  Cancel,
  Delete,
  Label,
  LocalOffer,
  Loop,
  Notifications,
  Timer,
} from '@mui/icons-material';
import { Box, Dialog, Divider, IconButton, Typography } from '@mui/material';

import AddComment from '@/components/common/task-popup/components/add-comment';
import Comment from '@/components/common/task-popup/components/comment';
import PopupLine from '@/components/common/task-popup/components/popup-line';
import Subtask from '@/components/common/ui/subtask';
import Tag from '@/components/common/ui/tag';

interface TaskPopupProps {
  open: boolean;
  onClose: () => void;
}

const TaskPopup: FC<TaskPopupProps> = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '80%',
          },
        },
        '& .MuiPaper-root': {
          backgroundColor: '#FEFBEC',
          padding: '13px 64px 29px',
          display: 'flex',
          gap: '24px',
        },
      }}
      fullWidth
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
        }}
      >
        <IconButton sx={{ color: 'primary.dark' }} onClick={onClose}>
          <Delete />
        </IconButton>
        <IconButton sx={{ color: 'primary.dark' }} onClick={onClose}>
          <Cancel />
        </IconButton>
      </Box>

      <Typography variant="h4" fontWeight="600">
        Here will be task name
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <PopupLine
          icon={<CalendarMonth />}
          text="Date:"
          content={
            <>
              <Typography>03.03.2023</Typography>
              <Tag icon={<Timer />} text="Include time" />
            </>
          }
        />

        <PopupLine
          icon={<Label />}
          text="Difficulty:"
          content={<Typography sx={{ color: '#D6922B' }}>Medium</Typography>}
        />

        <PopupLine
          icon={<Loop />}
          text="Repeat:"
          content={<Typography>Every Tuesday</Typography>}
        />

        <PopupLine
          icon={<Notifications />}
          text="Notification"
          content={<Typography>30 minutes before</Typography>}
        />

        <PopupLine
          icon={<LocalOffer />}
          text="Tags:"
          content={
            <>
              <Tag text="Housing" />
              <Tag text="Add tag" icon={<Add />} />
            </>
          }
        />
      </Box>

      <Box
        sx={{
          width: '100%',
          border: '1px solid #143E35',
          padding: '4px 8px',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <Typography variant="h6">Subtasks</Typography>
        <Subtask text="Something cool" />
        <Subtask text="Wow nice so good!" />
        <Subtask text="Finish GDTK" />
        <Tag text="Add subtask" icon={<AddTask />} />
      </Box>

      <Box
        sx={{
          width: '100%',
          border: '1px solid #143E35',
          padding: '16px',
          borderRadius: '4px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <Typography variant="body2" fontWeight="600">
          Description
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra
          ligula ullamcorper nisi suscipit, in condimentum urna molestie. Nulla
          facilisi. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Proin lacinia ipsum sed erat lacinia,
          eu euismod nisi tempus. Maecenas eleifend quis mi a rhoncus. Nulla ut
          tortor tellus. Morbi sed augue metus. Ut vitae eros sit amet purus
          viverra semper sit amet sed libero. Nullam venenatis ante id elementum
          tincidunt. Integer congue vel velit eget semper. Mauris a ligula ante.
        </Typography>
      </Box>

      <Divider color="#143E35" />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Comment name="Testing" date="03.03.2013" text="Very nice wow cool!" />
        <Comment
          name="Testing"
          date="02.03.2013"
          text="Jesus christ so good!"
        />
        <AddComment />
      </Box>
    </Dialog>
  );
};

export default TaskPopup;
