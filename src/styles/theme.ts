import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Nunito', 'Roboto', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#86AC88',
      light: '#D5E8C5',
      dark: '#143E35',
    },
    secondary: {
      main: '#FBF2C0',
      light: '#FEFBEC',
    },
    info: {
      main: '#E0CCDE',
      light: '#F7F2F6',
    },
  },
});

export default theme;
