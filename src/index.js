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

const removeChildren = function(target) {
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
};

const inputHandler = debounce(e => {
  removeChildren(results);

  if (e.target.value === "") {
    return;
  } else {
    search(e.target.value)
      .then(res => {
        removeChildren(results);
        renderList(res);
      })
      .catch(err => console.error(err));
  }
}, 500);

searchBar.oninput = inputHandler;

// to perform less fetching, lets debounce
function debounce(fn, time) {
  let timeoutId = null;
  // returns a debounced version of given fn
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, time);
  };
}
