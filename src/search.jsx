import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export default function SearchBox({ updateinfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "571cabe3725fcacc71ecf1c9a41dfa6c";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      
      if (!response.ok) {
        throw new Error("City not found or API error");
      }

      const data = await response.json();

      let result = {
        city: data.name,
        temp: data.main.temp,
        MinTemp: data.main.temp_min,
        MaxTemp: data.main.temp_max,
        humidity: data.main.humidity,
        feelslike: data.main.feels_like,
        weather: data.weather[0].description,
      };

      console.log(result);
      return result;
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      alert("Unable to fetch weather. Please check the city name or try again.");
      return null;
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(city);
    let newinfo = await getWeatherInfo();
    if (newinfo) {
      updateinfo(newinfo);
      setCity("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Search
        </Button>
      </form>
    </div>
  );
}
 