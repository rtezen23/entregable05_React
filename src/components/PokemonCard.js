import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

const PokemonCard = ({ url }) => {

    const [pokemon, setPokemon] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
    }, [url]);

    return (
        <article className='card-container' onClick={() => navigate(`/pokedex/${pokemon.id}`)} style={{ borderColor: colors[pokemon.types?.[0].type.name]?.[0] }}>
            <div className="card-header" style={{ background: colors[pokemon.types?.[0].type.name]?.[1] }}></div>
            <div className="pokemon-card">
                <div className="card-info">
                    <img className='card-img' src={pokemon.sprites?.other['official-artwork'].front_default} alt={pokemon.name} />
                    <h2 className='card-name'>{pokemon.name}</h2>
                    <p className='card-type'>{pokemon.types?.[0].type.name} {(pokemon.types?.[1]?.type.name) && ' / ' + pokemon.types?.[1]?.type.name} </p>
                    <span>Tipo</span>

                    <hr className='card-hr' />
                </div>
                <div className="card-stats">
                    {
                        pokemon.stats?.map(stat => (
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