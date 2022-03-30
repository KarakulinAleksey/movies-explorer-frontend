import React from "react";
import "./search-form.css";
import searchFormIcon from "../../../images/iconSearchform.svg";
import { useLocation } from "react-router-dom"; // level-3

export default function SearchForm(props) {
  const [searchWord, setSearchWord] = React.useState(""); //--переменная ключевого слова поиска--//
  const [searchWordSavedMovie, setSearchWordSavedMovie] = React.useState(""); // level-3
  const [error, setError] = React.useState("");
  const [formValid, setFormValid] = React.useState(false);
  const location = useLocation(); // level-3

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

  function getLocatioUse() {
    return location.pathname === "/movies";
  } // level-3

  function getLocalStorageSearchWord() {
    return JSON.parse(localStorage.getItem("searchWord"));
  } // level-3

  React.useEffect(() => {
    if (getLocalStorageSearchWord() && getLocatioUse()) {
      setSearchWord(getLocalStorageSearchWord());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); // level-3

  React.useEffect(() => {
    getLocatioUse() ? console.log() : props.onGetMoviesSavedMovies("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // level-3

  function handleChangeKeyWord(item) {
    getLocatioUse()
      ? setSearchWord(item.target.value)
      : setSearchWordSavedMovie(item.target.value);
    if (
      item.target.value.length === 0 ||
      item.target.value.includes("*") ||
      item.target.value.includes("/") ||
      item.target.value.includes("(") ||
      item.target.value.includes(")") ||
      item.target.value.includes("+") ||
      item.target.value.includes("|") ||
      item.target.value.includes("\\") ||
      item.target.value.includes("[") ||
      item.target.value.includes("]") ||
      item.target.value.includes("?")
    ) {
      setError("  Нужно ввести ключевое слово");
    } else {
      setError("");
    }
  }

  function handleSubmit(item) {
    item.preventDefault();
    getLocatioUse()
      ? localStorage.setItem("searchWord", JSON.stringify(searchWord))
      : console.log();
    getLocatioUse()
      ? props.onGetMovies(searchWord)
      : props.onGetMoviesSavedMovies(searchWordSavedMovie);
    setError("");
    // props.onGetMovies(searchWord); //level-3
    // setSearchWord("");
  }

  React.useEffect(() => {
    if (searchWord && !error) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [searchWord, error]);

  React.useEffect(() => {
    //level-3
    if (searchWordSavedMovie && !error) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [searchWordSavedMovie, error]);

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
          value={getLocatioUse() ? searchWord : searchWordSavedMovie}
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
