import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Box, Grid, Paper, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useWeatherContext } from "../context/WeatherContext";

const CurrentWeather = () => {
  const { weatherData } = useWeatherContext();

  if (!weatherData) return <Typography>No Weather</Typography>;

  const formattedDate = dayjs
    .unix(weatherData.current.last_updated_epoch)
    .format("MMMM DD, YYYY");

  return (
    <Paper elevation={3} className="page">
      <Typography variant="h5" gutterBottom>
        {formattedDate}
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid className="flex" size={{ xs: 6 }} >
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          />
        </Grid>

        <Grid size={{ xs: 6 }} >
          <Typography variant="h3">
            {Math.round(weatherData.current.temp_c)}°C
          </Typography>
          <Typography className="bold">
            {weatherData.current.condition.text}
          </Typography>
        </Grid>
      </Grid>

      <Box mt={2} className="flex-justify">
        <Grid size={4}>
          <Typography component={"div"}>Humidity</Typography>
          <Typography
            component={"div"}
            className="textAlign"
          >
            {weatherData.current.humidity}%
          </Typography>
        </Grid>

        <Grid size={4}>
          <Typography component={"div"}>Wind</Typography>
          <Typography
            component={"div"}
            className="flex"
          >
            <ArrowUpwardIcon
              sx={{
                transform: `rotate(${weatherData.current.wind_degree}deg)`,
              }}
            />
            <Typography>
              <strong>{weatherData.current.wind_kph}</strong> m/s
            </Typography>
          </Typography>
        </Grid>

        <Grid size={4}>
          <Typography component={"div"}>Visibility</Typography>
          <Typography component={"div"} className="bold">
            <span className="fontSize17">
              {weatherData.current.vis_km / 1000}
            </span>{" "}
            km
          </Typography>
        </Grid>
      </Box>
    </Paper>
  );
};

export default CurrentWeather;
