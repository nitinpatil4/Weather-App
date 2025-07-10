import App from './App.jsx'
import Infobox from './info.jsx'
import './index.css'
import Searchbox from './search'
import { useState } from 'react'

export default function Weatherapp(){
    const [weatherinfo,setweatherinfo]=useState(
        {
            MaxTemp : 26.32,
            MinTemp : 26.32,
            city : "Dhule",
            feelslike : 26.32,
            humidity : 79,
            temp : 26.32,
            weather : "overcast clouds"
        }
    );
    let updateinfo =(newinfo) =>{
        setweatherinfo(newinfo);
    }
    return (
       <div className="weather-overlay">
      <Searchbox updateinfo={updateinfo} />
      <Infobox info={weatherinfo} />
    </div>
    )
} 