import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch } from "../../redux/actions";
import { getFilteredFilms } from "../../redux/selectors";
import StarRating from "../StarRating/StarRating";
import style from "./SearchFilter.module.css";

function SearchFilter() {
  const films = useSelector(getFilteredFilms);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(changeSearch(search.trim()));
  }, [search, dispatch]);

  function handleInputChange(event) {
    setSearch(event.currentTarget.value);
  }

  function handleInputBlur() {
    if (search.trim().length > 0) {
      return;
    }
    setIsOpen(false);
  }

  return (
    <div className={style.div}>
      <input
        onChange={handleInputChange}
        value={search}
        onBlur={handleInputBlur}
        onFocus={() => setIsOpen(true)}
        placeholder="Enter movie name"
        className={style.input}
      ></input>
      {isOpen && films.length > 0 && (
        <ul className={style.list}>
          {films.length > 0 &&
            films.map((film) => (
              <li key={film.title} className={style.item}>
                <div className={style.item_div}>
                  <p className={style.item_title}>{film.title}</p>
                  <StarRating rating={Number.parseFloat(film.rating)} />
                </div>
                <p className={style.item_category}>{film.category}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SearchFilter;
