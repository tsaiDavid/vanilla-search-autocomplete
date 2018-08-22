# vanilla-search-autocomplete
A vanilla JS implementation of a search w/ autocomplete

**Demo:**

[![Edit vanilla-search-autocomplete](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/tsaiDavid/vanilla-search-autocomplete/tree/master/)

## Features
- Good ol' vanilla JavaScript
- `parcel` for bundling
- *Debounced* input event handler
- A simple mocked API call (`searchData`) for movie titles and ratings
  - `searchData(<search_term>) -> Promise`

## Thoughts
More times than not, focusing on the end user experience pushes you towards considering performance optimizations: a win-win.

In this case, we *debounced* the input event handler, which better helps us manage the number of calls, but also ensures a
more consistent experience for the user. Depending on your use case, you'll want to fine tune and experiment with the duration.

<iframe src="https://codesandbox.io/embed/github/tsaiDavid/vanilla-search-autocomplete/tree/master/" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
