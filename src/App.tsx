// src/App.tsx
import { AppBar, Button, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';
import ErrorFallback from "./components/ErrorFallback";
import { WeatherContextProvider } from './context/WeatherContext';
import "./global.css";
import { Home } from './pages/Home';
import { SearchHistory } from './pages/SearchHistory';

export const App = () => {

  return (
    <WeatherContextProvider>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className='flexGrow'>
            Weather App
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/search">Search & History</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchHistory />} />
          <Route path="*" element={<ErrorFallback />} />
        </Routes>
      </Container>
    </WeatherContextProvider>
  );
};
