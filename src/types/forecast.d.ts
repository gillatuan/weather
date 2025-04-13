export interface HourlyForecast {
  time: string;
  time_epoch: number;
  temp_c: number;
  condition: {
    icon: string;
    text: string;
  };
}

export interface ForecastDay {
  date: string;
  date_epoch: number;
  hour: HourlyForecast[];
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
}

export interface ForecastItem {
  forecastday: ForecastDay[];
}

export interface ForecastData {
  forecast: ForecastItem;
}
