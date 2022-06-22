import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const colors = {

  normal: ['#98616D', 'linear-gradient(181.51deg, #735259 -6.44%, #BC6B7C 121.95%, #7C3F4C 186.11%)'],
  fighting: ['#BB4C30', 'linear-gradient(176.83deg, #96402A -8.78%, #F1613C 169.09%, #CB735D 242.33%)'],
  poison: ['#A674D8', 'linear-gradient(177.03deg, #5B3184 -11.97%, #A564E3 71.28%, #CE9BFF 135.64%)'],
  ground: ['#8A5911', 'linear-gradient(179.75deg, #654008 -19.96%, #895C1A 43.67%, #D69638 138.4%)'],
  rock: ['#9B9B9B', 'linear-gradient(177.03deg, #7E7E7E -11.97%, #8D8D94 57.49%, #D3D3D3 135.64%)'],
  bug: ['#8ECC7B', 'linear-gradient(177.56deg, #62DB60 -58.92%, #3BB039 16.57%, #AAFFA8 209.53%)'],
  ghost: ['#4D53B6', 'linear-gradient(177.03deg, #323569 -11.97%, #454AA8 57.49%, #787DDA 135.64%)'],
  steel: ['#839C93', 'linear-gradient(179.75deg, #5E736C -19.96%, #728881 43.67%, #A8A8A8 138.4%)'],
  fire: ['#E6732B', 'linear-gradient(176.37deg, #F96D6F -32.26%, #E35825 22.55%, #E8AE1B 125.72%)'],
  water: ['#3C90FD', 'linear-gradient(179.57deg, #133258 -70.14%, #1479FB 56.16%, #82B2F1 214.85%)'],
  grass: ['#BADCAE', 'linear-gradient(178.92deg, #7EC6C5 0.92%, #ABDAC6 47.96%, #CAE099 99.08%)'],
  electric: ['#5E64D7', 'linear-gradient(179.75deg, #0C1395 -19.96%, #2B319B 43.67%, #7075D9 138.4%)'],
  psychic: ['#', ''],
  ice: ['#90CFEA', 'linear-gradient(177.03deg, #6FBEDF -11.97%, #64CBF5 47.77%, #BDEBFE 136.72%)'],
  dragon: ['#78BFC9', 'linear-gradient(179.75deg, #478A93 -19.96%, #56A4AE 43.67%, #A2BEC1 138.4%)'],
  dark: ['#3B3C3C', 'linear-gradient(177.03deg, #030706 -11.97%, #0D1211 57.49%, #5A5E5D 135.64%)'],
  fairy: ['#B7476D', 'linear-gradient(179.75deg, #971B45 -19.96%, #C23867 43.67%, #CD7D98 138.4%)'],
  unknown: ['#', ''],
  shadow: ['#', '']

}

const PokemonDetail = () => {

  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon(res.data))

  }, [id]);

  console.log(pokemon);

  return (
    <div className="detail-container">

      <main className='detail-main'>
        <div className='detail-header' style={{ background: colors[pokemon.types?.[0].type.name]?.[1] }}>
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
            <p className={(pokemon.types?.[1]) ? 'type-text' : ''}>{(pokemon.types?.[1]) && pokemon.types?.[1].type.name}</p>
          </div>
          <div className="info-abilities">
            <h3>Abilities</h3>
            <p className='type-text'>{pokemon.abilities?.[0].ability?.name}</p>
            <p className={(pokemon.abilities?.[1]?.ability.name) ? 'type-text' : ''}>{(pokemon.abilities?.[1]?.ability.name) && pokemon.abilities?.[1].ability?.name}</p>
          </div>
        </div>

        <section className='detail-stats'>
          <h4 className='stats-title'>Stats</h4>
          <div className="stats-info">
            <p className='info-name upper'>{pokemon.stats?.[0].stat?.name}</p>
            <span className='info-number'>{pokemon.stats?.[0].base_stat}/150</span>
          </div>
          <div className='stats-bar-container'>
            <div className='stats-bar-progress' style={{ width: `${pokemon.stats?.[0].base_stat * 100 / 150}%`, background: colors[pokemon.types?.[0].type.name]?.[1] }}></div>
          </div>

          <div className="stats-info">
            <p className='info-name'>{pokemon.stats?.[1].stat?.name}</p>
            <span className='info-number'>{pokemon.stats?.[1].base_stat}/150</span>
          </div>
          <div className='stats-bar-container'>
            <div className='stats-bar-progress' style={{ width: `${pokemon.stats?.[1].base_stat * 100 / 150}%`, background: colors[pokemon.types?.[0].type.name]?.[1] }}></div>
          </div>

          <div className="stats-info">
            <p className='info-name'>{pokemon.stats?.[2].stat?.name}</p>
            <span className='info-number'>{pokemon.stats?.[2].base_stat}/150</span>
          </div>
          <div className='stats-bar-container'>
            <div className='stats-bar-progress' style={{ width: `${pokemon.stats?.[2].base_stat * 100 / 150}%`, background: colors[pokemon.types?.[0].type.name]?.[1] }}></div>
          </div>

          <div className="stats-info">
            <p className='info-name'>{pokemon.stats?.[5].stat?.name}</p>
            <span className='info-number'>{pokemon.stats?.[5].base_stat}/150</span>
          </div>
          <div className='stats-bar-container'>
            <div className='stats-bar-progress' style={{ width: `${pokemon.stats?.[5].base_stat * 100 / 150}%`, background: colors[pokemon.types?.[0].type.name]?.[1] }}></div>
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