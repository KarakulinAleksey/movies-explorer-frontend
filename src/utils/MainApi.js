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
  }

    
  
  export const mainApi = new MainApi({
    // baseUrl: "https://api.mov-exp.karakulin.nomoredomains.work",
    baseUrl: "http://localhost:3001",
    headers: {
      "Content-Type": "application/json",
    },
  });