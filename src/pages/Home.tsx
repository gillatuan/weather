import { Container, Typography } from "@mui/material";
import CurrentWeather from "../components/CurrentWeather";
import Forecast from "../components/Forecast";
import Search from "../components/Search";

export const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Home page
      </Typography>
      <Search />
      <CurrentWeather />
      <Forecast />
    </Container>
  );
};