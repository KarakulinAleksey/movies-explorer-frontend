class MainApi {
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

    //--метод обновление данных пользователя---//
    updateProfileUser(name, email){
      return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        credentials: 'include',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          email: email,
        }),
      })
        .then(this._checkResponse)
        .then((res) => {
          return res;
        }) 
    };

    //--метод получения данных пользователя---//
    getAuthUser(){
      return fetch(`${this._baseUrl}/users/me`, {
        method: "GET",
        credentials: 'include',
        headers: this._headers,
      })
      .then(this._checkResponse)
        
    };
    

    //---------метод запроса всех фильмов из сохраненных-------//
    getAllMovies(){
      return fetch(`${this._baseUrl}/movies/`, {
        method: "GET",
        credentials: 'include',
        headers: this._headers,
      })
      .then(this._checkResponse)
        
    }


     //---------метод запроса на добавление фильма в сохраненные-------//
     addMovie(
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      movieId,
      nameRU,
      nameEN,
     ){
      this._country = country;
      this._director = director;
      this._duration = duration;
      this._year = year;
      this._description = description;
      this._image = image;
      this._trailerLink = trailerLink;
      this._thumbnail = thumbnail;
      this._movieId = movieId;
      this._nameRU = nameRU;
      this._nameEN = nameEN;

      return fetch(`${this._baseUrl}/movies/`, {
        method: "POST",
        credentials: 'include',
        headers: this._headers,
        body: JSON.stringify({
          "country": this._country,
          "director": this._director,
          "duration": this._duration,
          "year": this._year,
          "description": this._description,
          "image": this._image,
          "trailerLink": this._trailerLink,
          "thumbnail": this._thumbnail,
          "movieId": this._movieId,
          "nameRU": this._nameRU,
          "nameEN": this._nameEN,
        })
      })
      .then(this._checkResponse)
        
    }

    //--метод запроса на удаление фильма--//
    deleteMovie(idMovie) {
      this._idMovie = idMovie;
      return fetch(`${this._baseUrl}/movies/${idMovie}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: this._headers
      })
        .then(this._checkResponse)
    }
  }
  
  
  export const mainApi = new MainApi({
    // baseUrl: "https://api.mov-exp.karakulin.nomoredomains.work",
    baseUrl: "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });