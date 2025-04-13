import { WeatherDataResponse } from "../types/weather";

const REACT_APP_WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const REACT_APP_WEATHER_FORCAST_KEY = process.env.REACT_APP_WEATHER_FORCAST_KEY;

export const fetchWeatherData = async (
  city: string
): Promise<WeatherDataResponse> => {
  const res = await fetch(
    `${REACT_APP_WEATHER_FORCAST_KEY}?key=${REACT_APP_WEATHER_API_KEY}&q=${city}&days=5`
  );
  if (!res.ok) throw new Error("Invalid country or city");
  return res.json();
};
