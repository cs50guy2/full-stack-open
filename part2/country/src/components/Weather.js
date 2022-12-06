import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Weather({ country }) {
  const [forecast, setForecast] = useState({});

  useEffect(() => {
    console.log('effect');
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]},${country.name.common}&APPID=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log('promise fulfilled');
        setForecast(response.data);
      });
  }, []);

  return (
    <div>
      <h2>Weather in {country.capital[0]}</h2>
      temperature{' '}
      {forecast.main && parseFloat(forecast.main.temp - 273.15).toFixed(2)}{' '}
      Celcius <br />
      <img
        src={
          forecast.weather &&
          `http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`
        }
        alt="weather"
      />
      <br /> wind {forecast.wind && forecast.wind.speed} m/s
    </div>
  );
}
