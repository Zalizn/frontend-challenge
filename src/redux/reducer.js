import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { changeSearch, changeGenres, changeRatings, setFilms } from "./actions";

const initialState = {
  films: [],
  search: "",
  ratings: [],
  genres: [],
};

const filmsReducer = createReducer(initialState.films, {
  [setFilms]: (_, { payload }) => payload,
});

const searchReducer = createReducer(initialState.search, {
  [changeSearch]: (_, { payload }) => payload,
});

const ratingsReducer = createReducer(initialState.ratings, {
  [changeRatings]: (_, { payload }) => payload,
});

const genresReducer = createReducer(initialState.genres, {
  [changeGenres]: (_, { payload }) => payload,
});

const reducer = combineReducers({
  films: filmsReducer,
  search: searchReducer,
  ratings: ratingsReducer,
  genres: genresReducer,
});

export default reducer;
