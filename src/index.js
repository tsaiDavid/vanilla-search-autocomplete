import { searchData as search } from "./mockSearch";

// For the sake of this example, we're safely assuming there will be no duplicate classNames
const searchBar = document.getElementsByClassName("search-input")[0];
const results = document.getElementsByClassName("results")[0];

const noResult = document.createElement("li");
noResult.innerText = "Sorry, no movies found";

const renderList = function(movies, target) {
  if (!movies.length) {
    results.appendChild(noResult);
  } else {
    const list = movies.reduce((frag, movie) => {
      const item = document.createElement("li");
      item.innerText = `${movie.title} - ${movie.rating}`;
      frag.appendChild(item);
      return frag;
    }, document.createDocumentFragment());
    results.appendChild(list);
  }
};

searchBar.oninput = e => {
  search(e.target.value)
    .then(res => renderList(res))
    .catch(err => console.error(err));
};
