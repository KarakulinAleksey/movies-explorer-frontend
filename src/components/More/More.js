import React from "react";
import "./More.css";

function More(props) {
  return (
    <section className="more">
      <button
        type="button"
        onClick={props.showMoreMovies}
        className="more__button"
      >
        Ещё
      </button>
    </section>
  );
}

export default More;
