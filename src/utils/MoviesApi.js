import {BASE_URL} from "./config";

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //---------метод проверки запроса-------//
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //---------метод запроса всех фильмов-------//
  getAllMovies() {
    return fetch(this._baseUrl, {
      method: "GET",
      headers: this._headers,
    })
    .then(this._checkResponse)
      
  }
}

export const moviesApi = new MoviesApi({
  // baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  baseUrl: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
