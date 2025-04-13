import { createContext, ReactNode, useContext, useState } from "react";
import { ForecastData } from "../types/forecast";
import { SearchHistoryItem } from "../types/search";
import { WeatherContextProps, WeatherData } from "../types/weather";

export const WeatherContext = createContext<WeatherContextProps>({
  city: "",
  setCity: (city: string) => {},
  forecastData: null,
  setForecastData: (data: ForecastData) => {},
  searchHistory: null,
  setSearchHistory: (data: SearchHistoryItem[]) => {},
  weatherData: null,
  setWeatherData: (data: WeatherData) => {},
});

export const WeatherContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[] | [] | null>(null);

  return (
    <WeatherContext.Provider
      value={{
        city,
        forecastData,
        searchHistory,
        weatherData,
        setCity,
        setForecastData,
        setSearchHistory,
        setWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
