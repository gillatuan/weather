import dayjs from "dayjs";
import { ForecastDay, HourlyForecast } from "../types/forecast";

export const groupForecastEvery3HoursByDay = (forecastDays: ForecastDay[]) => {
  const result: Record<string, HourlyForecast[]> = {};

  forecastDays.forEach((day) => {
    const date = dayjs(day.date).format("YYYY-MM-DD");
    const filtered = day.hour.filter((_, index) => index % 3 === 0);
    result[date] = filtered;
  });

  return result;
};
