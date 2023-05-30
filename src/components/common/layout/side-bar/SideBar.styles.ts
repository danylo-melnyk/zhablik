import { SxProps, Theme } from '@mui/material/styles';

export const wrapper: SxProps<Theme> = {
  width: 200,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    position: 'fixed',
    minHeight: '100vh',
    backgroundColor: '#9EBDA0',
    marginTop: '65px',
    width: '282px',
    boxSizing: 'border-box',
    padding: '28px 16px',
    gap: '4px',
  },
};
