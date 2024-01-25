import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJokesList, fetchJoke } from "../redux/store/jokeSlice/jokeSlice";
import { JokeItem } from "../redux/store/jokeSlice/jokeSlice";
// import { RootState } from "../redux/store/store";
const Home = () => {
  const [status, setStatus] = useState(null);
  const { joke, jokesList } = useSelector((state) => state.joke);
  const dispatch = useDispatch();

  const startStopInterval = () => {
    if (status) {
      clearInterval(status);
      console.log("закончилось");
      setStatus(null);
      return;
    }
    let id = setInterval(() => {
      dispatch(fetchJoke());
    }, 3000);
    setStatus(id);
    console.log("началось");
  };

  const getJoke = () => {
    dispatch(fetchJoke());
  };
  useEffect(() => {
    const storage = localStorage.getItem("array");
    const items = storage ? JSON.parse(storage) : [];
    console.log(items);
    dispatch(setJokesList(items));
  }, [dispatch]);

  const addRemoveFavorite = () => {
    const randomId = Math.random();
    const index = jokesList.findIndex((obj) => obj.joke === joke);

    if (index === -1) {
      if (jokesList.length > 9) {
        const newJokesList = jokesList.shift();
        console.log(jokesList);
        console.log(newJokesList);
      }
      const newJokesList = [...jokesList, { id: randomId, joke: joke }];
      dispatch(setJokesList(newJokesList));
      const json = JSON.stringify(newJokesList);
      localStorage.setItem("array", json);
    } else {
      const newJokesList = [...jokesList];
      newJokesList.splice(index, 1);
      dispatch(setJokesList(newJokesList));
      localStorage.removeItem("array");
      const json = JSON.stringify(newJokesList);
      localStorage.setItem("array", json);
    }
  };

  return (
    <div>
      <div className="favorite">
        <Link to="/favorites">
          <button>favorite</button>
        </Link>
      </div>
      <div className="buttonsblock">
        <button onClick={getJoke}>Get a joke</button>
        <button onClick={startStopInterval}>new joke in 3 seconds</button>

        <div className="blockfav"></div>
      </div>
      <div className="jokes">
        <div className="block1">
          <div>{joke}</div>
          {joke ? (
            <div>
              <button className="addfavorbutt" onClick={addRemoveFavorite}>
                add to favorite
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
