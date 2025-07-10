import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Infobox({ info }) {  
  const INTI_URL = "https://images.unsplash.com/photo-1633347511161-5265901337ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNsb3VkeSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="weatherinfo">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={INTI_URL}
          title="Cloudy Sky"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p> 🌡️ Temperature: {info.temp} &deg;C</p>
            <p> 💧 Humidity: {info.humidity}%</p>
            <p> 📉 Min Temp: {info.MinTemp} &deg;C</p>
            <p> 📈 Max Temp: {info.MaxTemp} &deg;C</p>
            <p> 🤗 Feels like: {info.feelslike} &deg;C</p>
            <h3>
              ⛅ Weather is <i>{info.weather}</i>
            </h3>
          </Typography>
        </CardContent>
        { /* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */ }
      </Card>
    </div>
  );
}
