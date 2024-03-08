import React from 'react'
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  // const jokeCart = useSelector((state) => state.joke);

  return (
    <div className='header-block'>
      <Link to={"/"}>
        <h1>
          JOKES
        </h1>
      </Link>
      <Link to={"/favorites"}>
        FAVORITE
        {/* {!!jokeCart.length && <div>{jokeCart.length}</div>} */}
      </Link>
    </div>
  );
}

export default Header