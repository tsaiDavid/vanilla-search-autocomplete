# vanilla-search-autocomplete
A vanilla JS implementation of a search w/ autocomplete

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
