import weatherIcon from '../../images/weatherIcons/party-cloudy.png'
import './Weather.css';

function Weather() {
  return (
    <li className="weather card">
      <img className="weather__icon" src={weatherIcon} alt="" />
      <div className="weather__info-wrapper">
        <p className="weather__info-degree semibold">21°</p>
        <p className="weather__info-status semibold">Переменная облачность</p>
      </div>
      <a className="weather__location medium hover-link" href="#">Ставрополь</a>
    </li>
  );
}

export default Weather;