import React from "react";
import "./search-form.css";
import searchFormIcon from "../../../images/iconSearchform.svg";

export default function SearchForm(props) {
  const [searchWord, setSearchWord] = React.useState(""); //--переменная ключевого слова поиска--//
  const [error, setError] = React.useState("");
  const [formValid, setFormValid] = React.useState(false);

  //---функция возвращает иконку поиск в зависимости от ширины экрана-------//
  function searchFormIconElement() {
    if (props.size.clientWidth > 500) {
      return (
        <img
          className="search-form__icon"
          src={searchFormIcon}
          alt="иконка поиска"
        />
      );
    }
  }

  function handleChangeKeyWord(item) {
    setSearchWord(item.target.value);
    if (item.target.value.length === 0) {
      setError("  Нужно ввести ключевое слово");
    } else {
      setError("");
    }
  }

  function handleSubmit(item) {
    item.preventDefault();
    localStorage.setItem("searchWord", JSON.stringify(searchWord));
    props.onGetMovies(searchWord);
    setError("");
    props.onGetMovies(searchWord);
    setSearchWord("");
  }

  React.useEffect(() => {
    if (searchWord && !error) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [searchWord, error]);

  return (
    <div className="search-form">
      {searchFormIconElement()}
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          name="search-input"
          placeholder={`${error}?${error}:Фильм`.slice(2, 29)}
          type="text"
          className="search-form__search-input"
          minLength="2"
          maxLength="40"
          value={searchWord}
          onChange={handleChangeKeyWord}
          required
        />
      </form>
      <button
        type="button"
        onClick={handleSubmit}
        className="search-form__button"
        disabled={!formValid}
      >
        Найти
      </button>
    </div>
  );
}
