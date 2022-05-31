import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeRatings } from "../../redux/actions";
import StarRating from "../StarRating/StarRating";
import style from "./RatingFilter.module.css";

const ratings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function RatingsFilter() {
  const dispatch = useDispatch();
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(changeRatings(selectedRatings));
  }, [selectedRatings, dispatch]);

  function handleInputChange(event) {
    const target = event.currentTarget;
    const value = target.value;
    if (target.value === "Any rating") {
      if (selectedRatings.length === ratings.length) {
        setSelectedRatings([]);
        return;
      } else {
        setSelectedRatings([...ratings]);
        return;
      }
    }

    if (target.checked) {
      setSelectedRatings((prevState) => [...prevState, value]);
      return;
    }

    if (!target.checked) {
      setSelectedRatings((prevState) =>
        prevState.filter((genre) => genre !== value)
      );
    }
  }

  return (
    <div className={style.div}>
      <button
        type="button"
        name="Rating"
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={style.button}
      >
        Rating
      </button>
      {isOpen && (
        <ul className={style.list}>
          <li>
            <label>
              <input
                type="checkbox"
                value="Any rating"
                onChange={handleInputChange}
                checked={selectedRatings.length === ratings.length}
                className={style.input}
              ></input>
              Any rating
            </label>
          </li>
          {ratings.map((rating) => (
            <li key={rating}>
              <label>
                <input
                  type="checkbox"
                  value={rating}
                  onChange={handleInputChange}
                  checked={selectedRatings.includes(rating)}
                  className={style.input}
                ></input>
                <StarRating rating={Number.parseInt(rating)} />
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RatingsFilter;
