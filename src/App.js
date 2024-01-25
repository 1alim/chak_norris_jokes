import { Route, Routes } from "react-router-dom";

import Favorites from './components/Favorites/Favorites';
import Home from './components/Home';

import './App.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
