import React from 'react';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import ProtectedRoutes from './components/ProtectedRoutes';
import PokemonDetail from './components/PokemonDetail';


function App() {
  return (
    
    <HashRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>

            <Route element={<ProtectedRoutes/>}>
              <Route path='/pokedex' element={<Pokemon/>}/>
              <Route path='/pokedex/:id' element={<PokemonDetail/>}/>
            </Route>
            
          </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
