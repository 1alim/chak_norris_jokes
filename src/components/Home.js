import React from "react";
import { Link } from "react-router-dom";
import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJokesList, fetchJoke } from "../redux/store/jokeSlice/jokeSlice";
import { useInterval } from "../assets/StartStop";
import {loadLS,setLS,removeLs} from "../assets/localStorageCart"


const Home = () => {

  const { joke, jokesList } = useSelector((state) => state.joke);
  const dispatch = useDispatch();
  const interval = useInterval(() => dispatch(fetchJoke()), 3000)
  console.log(joke, jokesList);

  useEffect(() => {
    const storage = localStorage.getItem("jokesArray");
    const items = storage ? JSON.parse(storage) : [];
    dispatch(setJokesList(items));
  }, [dispatch]);

  const addRemoveFavorite = () => {
    const randomId = Math.random();
    const index = jokesList.findIndex((obj) => obj.joke === joke);

    if (index === -1) {
      if (jokesList.length > 9) {
        const newJokesList = jokesList.shift();
      } else {
        const newJokesList = [...jokesList, { id: randomId, joke: joke }];
        dispatch(setJokesList(newJokesList));
        setLS(newJokesList)
      }

    } else {
      const newJokesList = [...jokesList];
      newJokesList.splice(index, 1);
      dispatch(setJokesList(newJokesList));
      removeLs()
      setLS(newJokesList)
    }
  };

  return (
    <div >
      <div className="favorite">
        <Link to="/favorites">
          <button>favorite</button>
        </Link>
      </div>
      <div className="buttons-block">
        <button onClick={() => dispatch(fetchJoke())}>Get a joke</button>
        <button onClick={() => interval?.addInterval()}>new joke in 3 seconds</button>
        <button className="add-favor-butt" onClick={addRemoveFavorite}>add to favorite</button>

        <div className="block-fav"></div>
      </div>
      <div className="jokes">
        <div className="block1">
          <div>{joke}</div>

        </div>
      </div>
    </div>
  );
};

export default Home;
