import { createAction } from "@reduxjs/toolkit";

const setFilms = createAction("films/set");

const changeSearch = createAction("search/change");

const changeRatings = createAction("ratings/change");

const changeGenres = createAction("genres/change");

export { setFilms, changeSearch, changeRatings, changeGenres };
