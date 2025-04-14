import { ForecastData } from "./forecast";
import { SearchHistoryItem } from "./search";

export interface WeatherContextProps {
  city: string | '';
  setCity: (city: string) => void;
  forecastData: ForecastData | null;
  setForecastData: (data: ForecastData | null) => void;
  searchHistory: SearchHistoryItem[] | [] | null,
  setSearchHistory: (data: SearchHistoryItem[]) => void,
  weatherData: WeatherData | null;
  setWeatherData: (data: WeatherData | null) => void;
}

export interface WeatherData {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    last_updated_epoch: number;
    wind_kph: number;
    wind_degree: number;
    vis_km: number;
    condition: {
      icon: string;
      text: string;
    };
  };
}

export interface WeatherDataResponse extends WeatherData, ForecastData {}
