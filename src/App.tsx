// src/App.tsx
import { CssBaseline, Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Routes, Route, Link } from 'react-router-dom';
import { WeatherContextProvider } from './context/WeatherContext';
import {Home} from './pages/Home';
import {SearchHistory} from './pages/SearchHistory';
import "./global.css"

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
        </Routes>
      </Container>
    </WeatherContextProvider>
  );
};
