import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const wrapper = (hasHeader: boolean): SxProps<Theme> => ({
  backgroundColor: 'secondary.main', //TODO HEX COLOR!
  minHeight: '100vh',
  overflowY: 'hidden',
  ...(hasHeader && {
    paddingTop: '60px',
  }),
});

export const page = (isOpened: boolean): SxProps<Theme> => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  ...(isOpened && {
    marginLeft: '282px',
  }),
});
