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
    return fetch("https://api.nomoreparties.co/beatfilm-movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    // .then(this._checkResponse)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.status());
      });
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});
