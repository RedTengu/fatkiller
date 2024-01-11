class WeatherApi {
  constructor({ url }) {
    this._url = url;
  }

  _isResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getWeather() {
    return fetch(this._url)
      .then(res => this._isResponse(res))
  }
}

export default WeatherApi;