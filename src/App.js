import { Route, Routes } from "react-router-dom";

import Favorites from './components/Favorites/Favorites';
import Home from './components/Home';

import './App.css';
import Header from "./Header/Header";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
