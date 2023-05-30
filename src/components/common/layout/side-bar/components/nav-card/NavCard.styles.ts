import { SxProps, Theme } from '@mui/material/styles';

export const wrapper = (isChosen: boolean): SxProps<Theme> => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '8px',
  padding: '4px 8px',
  color: 'primary.dark',
  textTransform: 'none',

  '&:hover': {
    backgroundColor: 'primary.main',
  },

  ...(isChosen && {
    backgroundColor: 'primary.main',
  }),

  svg: {
    width: '16px',
    height: '16px',
  },
});
