import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a90e2', // xanh da trời
    },
    secondary: {
      main: '#f5a623', // vàng cam
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    overline: {
      fontWeight: 'bold',
      fontSize: '1rem',
      textTransform: 'capitalize',
    }
  },
});

export default theme;
