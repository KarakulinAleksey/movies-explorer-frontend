export const BASE_URL = "http://localhost:3001";

//--регистрация--//
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      password: password,
      email: email,
    }),
  })
    .then(_checkResponse)
    .then((res) => {
      return res;
    }) 
};

//--авторизация-----//
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      email: email,
    }),
  })
    .then(_checkResponse)
    .then((data) => {
      return data;
    })
};

//---выход из аккаунта---//
export const signout = () => {
  return fetch(`${BASE_URL}/signout`, {
      method: 'GET',
      credentials: 'include'
  })
      .then(_checkResponse)
      .then((data) => data)
}


  //---------метод проверки запроса-------//
 const _checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
