import DeleteIcon from "@mui/icons-material/Delete";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { WeatherContext } from "../context/WeatherContext";
import { fetchWeatherData } from "../services/weatherAPI";
import { SearchHistoryItem } from "../types/search";
import {
  loadEncryptedFromLocalStorage,
  saveEncryptedToLocalStorage,
  SECRET_KEY,
} from "../utils/storage";

const History = () => {
  const navigate = useNavigate();

  const [history, setHistory] = useState<SearchHistoryItem[]>(
    loadEncryptedFromLocalStorage(SECRET_KEY)
  );
  const { setCity, setForecastData, setWeatherData } =
    useContext(WeatherContext);

  const handleClick = async (city: string) => {
    const data = await fetchWeatherData(city);
    setCity(city);
    setWeatherData({
      current: data.current,
      location: data.location,
    });
    setForecastData({
      forecast: data.forecast,
    });
    return navigate("/");
  };

  const deleteHistory = (city: string) => {
    const updated = history.filter((item) => item.city !== city);
    saveEncryptedToLocalStorage(SECRET_KEY, updated);
    setCity("");
    setHistory(updated);
  };

  return (
    <>
      <Typography variant="h6">History</Typography>
      <List>
        {history?.map((item, idx) => {
          return (
            <ListItem>
              <ListItemText
                primary={item.city}
                onClick={() => handleClick(item.city)}
              />
              <IconButton onClick={() => deleteHistory(item.city)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default History;
