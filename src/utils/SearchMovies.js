export default function searchingMovies(arrayAllMovies, keyword) {
  console.log('searchingMovies-arrayAllMovies',arrayAllMovies);
  console.log('searchingMovies-keyword',keyword);
  
  //---массив объектов с одной строкой параметров --/
  const _unityPropertsOneLine = arrayAllMovies.map((movie) => {
    return {
      id: movie.id,
      oneString:
        (movie.nameRU ? movie.nameRU.toLowerCase() : "") +
        " " +
        (movie.nameEN ? movie.nameEN.toLowerCase() : "") +
        " " +
        (movie.country ? movie.country.toLowerCase() : "") +
        " " +
        (movie.director ? movie.director.toLowerCase() : "") +
        " " +
        (movie.year ? movie.year.toLowerCase() : ""),
    };
  });

  //---массив объектов после сортировки по ключевому слову--/
  const _sortByKeyword = _unityPropertsOneLine.filter((movies) => {
    return movies.oneString.includes(keyword?keyword.toLowerCase():'');
  });
  console.log('searchingMovies-_sortByKeyword',_sortByKeyword);
  //--массив отсортированных фильмов--//
  let _arraySortedMovies = [];

  _sortByKeyword.forEach((elementSortMovies) => {
    arrayAllMovies.forEach((elementAllMovies) => {
      if (elementAllMovies.id === elementSortMovies.id) {
        _arraySortedMovies.push(elementAllMovies);
      }
    });
  });

  localStorage.setItem("sortedMovies", JSON.stringify(_arraySortedMovies));
  return _arraySortedMovies;
}
