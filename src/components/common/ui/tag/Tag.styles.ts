import { SxProps, Theme } from '@mui/material/styles';

export const wrapper = (hasFunction: boolean): SxProps<Theme> => ({
  borderRadius: '8px',
  border: '2px solid #143E35', //TODO hex
  padding: '4px 8px',
  color: 'primary.dark',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  width: 'fit-content',

  svg: {
    width: '16px',
    height: '16px',
  },

  ...(hasFunction && {
    cursor: 'pointer',
  }),
});
