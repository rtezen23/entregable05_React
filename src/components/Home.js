import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePokemon } from '../store/slices/pokemon.slice';
import logo from '../images/logo.png';
import footer from '../images/footer.JPG';

const Home = () => {

    const [pokemonName, setPokemonName] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getPokemon = name => {
        if (name) {
            dispatch(changePokemon(name));
            navigate('./pokedex');
        } else alert('Type your trainer name')
    }

    return (
        <div className='home'>

            <img src={logo} alt="logo" className='home-logo' />

            <h1 className='home-title'>!Hello trainer!</h1>
            <p className='home-text'>Give me your name to start</p>

            <input className='home-input' onChange={e => setPokemonName(e.target.value)} value={pokemonName} />
            <button className='home-button' onClick={() => getPokemon(pokemonName)}>Comenzar</button>

            <img src={footer} alt="footer" className='home-footer' />
        </div>
    );
};

export default Home;