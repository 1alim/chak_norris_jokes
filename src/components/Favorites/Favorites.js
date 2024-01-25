import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { setJokesList } from '../../redux/store/jokeSlice/jokeSlice'
import './Favorites.css'

const Favorites = () => {
  const dispatch = useDispatch()
  const { jokesList } = useSelector((state) => state.joke)
  
  const clearList = () => {
    dispatch(setJokesList([]))
    localStorage.removeItem('array');
  }

  const deleteItem = (id) => {
    const newJokesList = [...jokesList.filter((i) => {
      return i.id !== id
    })]
    dispatch(setJokesList(newJokesList))
    localStorage.removeItem('array');
    const json = JSON.stringify(newJokesList)
    localStorage.setItem('array', json)
  }

  console.log(jokesList);
  return (
    <div>
      {
        jokesList.map((item) => {
          return <div key={item.id} className='item'>
            <div >{item.joke}</div>
            <div className='deleteitem' onClick={() => deleteItem(item.id)}>X</div>
          </div>
        })
      }
      <div className='buttons'>
        <Link to='/'>
          <button>back</button>
        </Link>
        <button onClick={clearList}>clear jokes list</button>
      </div>
    </div>
  )
}

export default Favorites