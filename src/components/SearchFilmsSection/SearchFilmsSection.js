import { useEffect } from "react";
import { useDispatch } from "react-redux";
import fetchFilms from "../../api/api";
import { setFilms } from "../../redux/actions";
import GenresFilter from "../GenresFilter/GenresFilter";
import RatingsFilter from "../RatingsFilter/RatingsFilter";
import SearchFilter from "../SearchFilter/SearchFilter";
import style from "./SearchFilmsSection.module.css";

function SearchFilmsSection() {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = fetchFilms();
    dispatch(setFilms(JSON.parse(data)));
  });

  return (
    <section className={style.section}>
      <SearchFilter />
      <GenresFilter />
      <RatingsFilter />
    </section>
  );
}

export default SearchFilmsSection;
