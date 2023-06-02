import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#ecf0f1',

    },
    secondary: {
      main: '#8e44ad',
    },
    error: {
      main: '#2ecc71',
    },

  },
});

export default theme;