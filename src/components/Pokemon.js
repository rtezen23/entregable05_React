import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';

const Pokemon = () => {

    const name = useSelector(state => state.pokemon);

    const [pokemons, setPokemons] = useState([]);
    const [pokemonsPage, setPokemonsPage] = useState(1);
    const [pokemonSelected, setPokemonSelected] = useState('');
    const [pokemonTypes, setPokemonTypes] = useState([]);

    const navigate = useNavigate();

    //paginacion
    const pokemonsPerPage = 24;
    const lastPokemon = pokemonsPerPage * pokemonsPage;
    const firstPokemon = lastPokemon - pokemonsPerPage;
    const pokemonsFiltered = pokemons.slice(firstPokemon, lastPokemon);
    const lastPage = Math.ceil(pokemons.length / pokemonsPerPage);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=400')
            .then(res => setPokemons(res.data.results));

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setPokemonTypes(res.data.results));
    }, []);

    const paginationNumbers = [];

    for (let i = 1; i <= lastPage; i++) {
        paginationNumbers.push(i);
    }

    const getPokemon = () => {
        navigate(`/pokedex/${pokemonSelected}`)
    }

    const searchType = e => {
        setPokemonsPage(1);
        if (e.target.value === '') {
            axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=400')
                .then(res => setPokemons(res.data.results));
        } else {
            axios.get(e.target.value)
                .then(res => setPokemons(res.data.pokemon))
        }
    }

    return (
        <div className="pokedex-container">

            <header className='pokedex-header'>
                <h1>Pokedex</h1>
                <p className='pokedex-header__text'> <span>Welcome {name}</span>, here you can find your favorite pokemon</p>

                <div className='pokedex-header-filter'>
                    <div className='pokedex-header-search'>
                        <input className='pokedex-header__input' value={pokemonSelected} onChange={e => setPokemonSelected(e.target.value)} />
                        <button className='pokedex-header__button' onClick={getPokemon}>Search</button>
                    </div>

                    <select className='pokedex-header__select' onChange={searchType}>
                        <option value="">Show All</option>
                        {pokemonTypes.map(type => (
                            <option key={type.url} value={type.url}>{type.name}</option>
                        ))
                        }
                    </select>
                </div>
            </header>

            <main className='main-container'>
                {
                    pokemonsFiltered.map(pokemon => (
                        <PokemonCard key={pokemon.name ? pokemon.name : pokemon.pokemon.name} url={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} />
                    ))
                }
            </main>
            <section className='pokedex-pagination'>
                <button className='pagination__previous' disabled={pokemonsPage === 1} onClick={() => setPokemonsPage(pokemonsPage - 1)}>Previous</button>
                {
                    paginationNumbers.map(paginationNumber => (
                        <button className='pagination__number' key={paginationNumber} onClick={() => setPokemonsPage(paginationNumber)}>{paginationNumber}</button>
                    ))
                }
                <button className='pagination__next' disabled={pokemonsPage === lastPage} onClick={() => setPokemonsPage(pokemonsPage + 1)}>Next</button>
            </section>

        </div>
    );
};

export default Pokemon;