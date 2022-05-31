import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {

  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});
  
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => setPokemon(res.data))

  }, [id]);

  return (
    <div className="detail-container">

      <main className='detail-main'>
        <div className='detail-header'>
          <img className='detail-img' src={pokemon.sprites?.other['official-artwork'].front_default} alt="" />
        </div>
        <p className='detail-id'>#{pokemon.id}</p>
        <h1 className='detail-name'>{pokemon.name}</h1>
        <div className="detail-size">
          <p className='size-name'>Weight: <span className='size-number'>{pokemon.weight}</span> </p>
          <p className='size-name'>Height: <span className='size-number'>{pokemon.height}</span> </p>
        </div>
        <div className="detail-info">
          <div className="info-type">
            <h3>Type</h3>
            <p className='type-text'>{pokemon.types?.[0].type.name}</p>
            <p className={(pokemon.types?.[1])? 'type-text' : ''}>{(pokemon.types?.[1]) && pokemon.types?.[1].type.name}</p>
          </div>
          <div className="info-abilities">
            <h3>Abilities</h3>
            <p className='type-text'>{pokemon.abilities?.[0].ability?.name}</p>
            <p className={(pokemon.abilities?.[1]?.ability.name)? 'type-text' : ''}>{(pokemon.abilities?.[1]?.ability.name) && pokemon.abilities?.[1].ability?.name}</p>
          </div>
        </div>

        <section className='detail-stats'>
          <h4 className='stats-title'>Stats</h4>
          <div className="stats-info">
            <p className='info-name upper'>{pokemon.stats?.[0].stat?.name}</p>
            <span className='info-number'>{pokemon.stats?.[0].base_stat}/150</span>
          </div>
          <div className='stats-bar-container'>
            <div className='stats-bar-progress' style={{ width: `${pokemon.stats?.[0].base_stat * 100 / 150}%` }}></div>
          </div>

          <div className="stats-info">
            <p className='info-name'>{pokemon.stats?.[1].stat?.name}</p>
            <span className='info-number'>{pokemon.stats?.[1].base_stat}/150</span>
          </div>
          <div className='stats-bar-container'>
            <div className='stats-bar-progress' style={{ width: `${pokemon.stats?.[1].base_stat * 100 / 150}%` }}></div>
          </div>

          <div className="stats-info">
            <p className='info-name'>{pokemon.stats?.[2].stat?.name}</p>
            <span className='info-number'>{pokemon.stats?.[2].base_stat}/150</span>
          </div>
          <div className='stats-bar-container'>
            <div className='stats-bar-progress' style={{ width: `${pokemon.stats?.[2].base_stat * 100 / 150}%` }}></div>
          </div>

          <div className="stats-info">
            <p className='info-name'>{pokemon.stats?.[5].stat?.name}</p>
            <span className='info-number'>{pokemon.stats?.[5].base_stat}/150</span>
          </div>
          <div className='stats-bar-container'>
            <div className='stats-bar-progress' style={{ width: `${pokemon.stats?.[5].base_stat * 100 / 150}%` }}></div>
          </div>
        </section>
      </main>

      <aside className='detail-aside'>
        <h4 className='aside-title'>Movements</h4>
        <ul className='aside-container'>
          {pokemon.moves?.map(move => (
            <li className='aside-item' key={move.move.url}>{move.move.name}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default PokemonDetail;