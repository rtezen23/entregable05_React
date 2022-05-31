import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
        .then(res=>setPokemon(res.data))
    },[url]);

    return (
        <article className='card-container' onClick={()=>navigate(`/pokedex/${pokemon.id}`)}>
            <div className="card-header"></div>
            <div className="pokemon-card">
                <div className="card-info">
                    <img className='card-img' src={pokemon.sprites?.other['official-artwork'].front_default} alt={pokemon.name} />
                    <h2 className='card-name'>{pokemon.name}</h2>
                    <p className='card-type'>{pokemon.types?.[0].type.name} {(pokemon.types?.[1]?.type.name)&& ' / ' + pokemon.types?.[1]?.type.name} </p>
                    <span>Tipo</span>

                    <hr className='card-hr'/>
                </div>
                <div className="card-stats">
                    {
                      pokemon.stats?.map(stat=>(
                        <div key={stat.stat.name} className="stat-item">
                            <p className='card-stats__name'>{stat.stat.name}</p>
                            <p className='card-stats__number'>{stat.base_stat}</p>
                        </div>
                      ))
                    }
                </div>
            </div>
        </article>
    )
}

export default PokemonCard;