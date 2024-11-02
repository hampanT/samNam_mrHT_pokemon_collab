import './App.css';
import React from 'react';
import PokéDex from './images/pokedex.png';
import { Link, Route, Routes } from 'react-router-dom';
import { PokemonGallery } from './Components/PokemonGallery';
import { PokemonDetails } from './Components/PokemonDetails';

function App() {
  return (
    <div>
      <Link to="/">
        <img src={PokéDex} alt="pokedex" style={{ cursor: 'pointer' }} />
      </Link>
      
      <Routes>
        <Route path="/" element={<PokemonGallery />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </div>
  );
}

export default App;