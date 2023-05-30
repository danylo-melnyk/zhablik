import { FC, useState } from 'react';
import {
  Add as AddIcon,
  Home as HomeIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Popover,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';

import AccountLine from '@/components/common/layout/header/components/account-line';
import FrogIcon from '@/components/common/layout/header/components/frog-icon/FrogIcon';
import useAddTask from '@/hooks/use-add-task';

import * as styles from './Header.styles';

const Header: FC<{ onDrawerOpen: () => void }> = ({ onDrawerOpen }) => {
  const isDesktop = useMediaQuery('(min-width:600px)');
  const { showPopup } = useAddTask();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={styles.appBar}>
      <Toolbar
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 16px !important',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <IconButton color="secondary" onClick={onDrawerOpen}>
            <MenuIcon sx={{ width: '36px', height: '36px' }} />
          </IconButton>

          {isDesktop && (
            <IconButton color="secondary" href="/">
              <HomeIcon sx={{ width: '36px', height: '36px' }} />
            </IconButton>
          )}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              svg: { width: '36px', height: '36px' },
              alignItems: 'center',
            }}
          >
            <FrogIcon />
            <Typography variant="h6" color="secondary">
              30
            </Typography>
          </Box>

          {isDesktop && (
            <IconButton color="secondary" onClick={showPopup}>
              <AddIcon sx={{ width: '36px', height: '36px' }} />
            </IconButton>
          )}
          <Box
            sx={{ svg: { width: '36px', height: '36px' }, cursor: 'pointer' }}
            onClick={handleClick}
          >
            <Avatar
              sx={{
                backgroundColor: 'secondary.main',
                color: 'primary.dark',
                fontWeight: '600',
              }}
            >
              LO
            </Avatar>
          </Box>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            sx={{
              marginTop: '12px',
              '.MuiPaper-root': {
                backgroundColor: '#F7F2F6',
                padding: '10px',
                width: '300px',
                gap: '10px',
                display: 'flex',
                flexDirection: 'column',
              },
            }}
          >
            <Typography>Profiles</Typography>
            <AccountLine isChosen={true} name="gdtk one love" />
            <AccountLine isChosen={false} name="idkanymore" />
            <AccountLine isChosen={false} name="hehe" />
          </Popover>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
