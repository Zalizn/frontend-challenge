import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGenres } from "../../redux/actions";
import { getGenresForFilter } from "../../redux/selectors";
import style from "./GenresFilter.module.css";

function GenresFilter() {
  const genres = useSelector(getGenresForFilter);
  const dispatch = useDispatch();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(changeGenres(selectedGenres));
  }, [selectedGenres, dispatch]);

  function handleInputChange(event) {
    const target = event.currentTarget;
    const value = target.value;

    if (target.value === "Any genre") {
      if (selectedGenres.length === genres.length) {
        setSelectedGenres([]);
        return;
      }
      setSelectedGenres([...genres]);
      return;
    }

    if (target.checked) {
      setSelectedGenres((prevState) => [...prevState, value]);
      return;
    }

    if (!target.checked) {
      setSelectedGenres((prevState) =>
        prevState.filter((genre) => genre !== value)
      );
    }
  }

  return (
    <div className={style.div}>
      <button
        type="button"
        name="Genre"
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={style.button}
      >
        Genre
      </button>
      {isOpen && (
        <ul className={style.ul}>
          <li className={style.item}>
            <label key="Any genre" className={style.label}>
              <input
                type="checkbox"
                value="Any genre"
                onChange={handleInputChange}
                checked={selectedGenres.length === genres.length}
                className={style.input}
              ></input>
              Any genre
            </label>
          </li>
          {genres.map((genre) => (
            <li className={style.item}>
              <label key={genre} className={style.label}>
                <input
                  type="checkbox"
                  value={genre}
                  onChange={handleInputChange}
                  checked={selectedGenres.includes(genre)}
                  className={style.input}
                ></input>
                {genre}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GenresFilter;
