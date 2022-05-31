import { createSelector } from "@reduxjs/toolkit";

const getFilms = (store) => store.films;

const getSearch = (store) => store.search;

const getRatings = (store) => store.ratings;

const getGenres = (store) => store.genres;

const getGenresForFilter = createSelector([getFilms], (films) => {
  const genres = new Set([]);
  films.forEach((film) => genres.add(film.category));
  return [...genres];
});

const getFilteredFilms = createSelector(
  [getFilms, getSearch, getRatings, getGenres],
  (films, search, ratings, genres) => {
    let filteredFilms = films.filter((film) =>
      film.title.toLowerCase().includes(search.toLowerCase())
    );

    if (ratings.length > 0) {
      filteredFilms = filteredFilms.filter((film) =>
        ratings.includes(`${Number.parseInt(film.rating)}`)
      );
    }

    if (genres.length > 0) {
      filteredFilms = filteredFilms.filter((film) =>
        genres.includes(film.category)
      );
    }
    return filteredFilms;
  }
);

export { getGenresForFilter, getFilteredFilms };
