import { Box, Grid, Paper, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useWeatherContext } from "../context/WeatherContext";
import { groupForecastEvery3HoursByDay } from "../utils/groupForecast";

const Forecast = () => {
  const { forecastData } = useWeatherContext();

  if (!forecastData) return <Typography>No forecast...</Typography>;

  const grouped = groupForecastEvery3HoursByDay(
    forecastData.forecast.forecastday
  );

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        5-Day Forecast(3 Hours)
      </Typography>

      {Object.entries(grouped).map(([date, items]) => (
        <Box key={date} mb={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              {dayjs(date).isSame(dayjs(), "day")
                ? "Today"
                : dayjs(date).isSame(dayjs().add(1, "day"), "day")
                ? "Tomorrow"
                : dayjs(date).format("DD MMMM")}
            </Typography>

            {items.map((item) => (
              <Grid
                key={item.time_epoch}
                container
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid size={{ xs: 4 }}>
                  <Typography variant="overline">
                    {dayjs(item.time_epoch * 1000).format("HH:mm")}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 4 }} className="flex">
                  <img
                    src={item.condition.icon}
                    alt={item.condition.text}
                    width={40}
                  />
                  <Typography>
                    {Math.round(item.temp_c)}/{Math.round(item.temp_c)}°C
                  </Typography>
                </Grid>
                <Grid size={{ xs: 4 }} className="align-right">
                  <Typography variant="overline">{item.condition.text}</Typography>
                </Grid>
              </Grid>
            ))}
          </Paper>
        </Box>
      ))}
    </Box>
  );
};

export default Forecast;
