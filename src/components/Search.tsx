import { Box, Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { WeatherContext } from "../context/WeatherContext";
import { fetchWeatherData } from "../services/weatherAPI";
import { SearchHistoryItem } from "../types/search";
import {
  loadEncryptedFromLocalStorage,
  saveEncryptedToLocalStorage,
  SECRET_KEY,
} from "../utils/storage";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const { city, setCity, setForecastData, setSearchHistory, setWeatherData } =
    useContext(WeatherContext);

  const handleSearch = async () => {
    if (!city.trim()) return;
    try {
      const data = await fetchWeatherData(city);
      const { pathname } = location;
      setWeatherData({
        current: data.current,
        location: data.location,
      });
      setForecastData({
        forecast: data.forecast,
      });

      // 📦 Save encrypt history
      const name = data.location.name;
      const existing = loadEncryptedFromLocalStorage(SECRET_KEY) || [];
      const updated: SearchHistoryItem[] = [
        { city: name, timestamp: Date.now() },
        ...existing.filter(
          (item: SearchHistoryItem) =>
            item.city.toLowerCase() !== name.toLowerCase()
        ),
      ].slice(0, 10);

      saveEncryptedToLocalStorage(SECRET_KEY, updated);
      setSearchHistory(updated);

      if (pathname === "/search") {
        return navigate("/");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <Box display="flex" gap={2} mb={3}>
        <TextField
          label="City"
          placeholder="Search country or city here"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      {error && (
        <Box display="flex" gap={1} mb={2} className="bold">
          {error}
        </Box>
      )}
    </>
  );
};

export default Search;
