// React imports
import { useEffect, useState} from 'react';
// Redux imports
import { useAppDispatch, useAppSelector } from '../../hook';
// Slice imports
import { weatherLoading, changeCityPopupOpen } from '../../slices/userSlice';

// Components
import Preloader from '../Preloader/Preloader';

// Api
import GeoApi from '../../utils/GeoApi';
import WeatherApi from '../../utils/WeatherApi';

// Constants
import API_KEY from '../../utils/constants';

// CSS
import './Weather.css';

function Weather() {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(state => state.isWeatherLoading);
  const country = useAppSelector(state => state.user.country);
  const city = useAppSelector(state => state.user.city);

  const [ coordinates, setCoordinates ] = useState({
    lat: 0,
    lon: 0
  });

  const [weatherData, setWeatherData] = useState({
    temp: 0,
    weather: '',
    icon: ''
  });

  // Запрос на получение координат заданного города
  useEffect(() => {
    const geoApi = new GeoApi({
      url: `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${API_KEY}`
    });

    geoApi.getGeo()
      .then(res => {
        setCoordinates({
          ...coordinates,
          lat: res[0].lat,
          lon: res[0].lon
        });
      })
      .catch(err => console.log(err));
  }, [city])

  // Получаем погоду исходя из полученных координат
  useEffect(() => {
    if(coordinates.lat !== 0 && coordinates.lon !== 0) {
      const weatherApi = new WeatherApi({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}&units=metric&lang=ru`
      });

      weatherApi.getWeather()
        .then(res => {
          const { description, icon } = res.weather[0];

          setWeatherData({
            ...weatherData,
            // Округляем температуру до целого
            temp: Math.round(res.main.temp),
            // Описание начинаем с заглавной буквы
            weather: description.charAt(0).toUpperCase() + description.slice(1),
            icon
          });
        })
        .catch(err => console.log(err));
    }
  }, [coordinates]);
  
  // Открыть попап смены города
  const handleClick = () => {
    dispatch(changeCityPopupOpen());
  }
  
  return (
    <li className="weather card">
      <div className="weather__info-wrapper">
        <img className="weather__icon" src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt="" />
        <p className="weather__info-degree semibold">{`${weatherData.temp}°`}</p>
        <p className="weather__info-status semibold">{weatherData.weather}</p>
      </div>
      <button className="weather__location medium hover-link" onClick={handleClick} type="button">{city}</button>
    </li>
  );
}

export default Weather;