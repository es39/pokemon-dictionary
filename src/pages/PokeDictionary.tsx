import pokeAxios from 'api/pokeAxios';
import { useEffect, useState } from 'react';

const PokeDictionary = () => {
  const [pokemon, setPokemon] = useState([]);
  const axiosNum = 100;

  // console.log(res.data.names[2].name): 한국 이름
  const getPokemonList = () => {
    pokeAxios
      .get(`/pokemon?limit=${axiosNum}`)
      .then(res => {
        console.log(res.data);
        setPokemon(res.data.results);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <div>
      <ul>
        {pokemon.map((el: any, index: number) => (
          <li key={index}>{el.name}</li>
        ))}
      </ul>
      {/* <img src={pokemon} /> */}
    </div>
  );
};

export default PokeDictionary;

/* FIXME: 
1. pokemon/1(id) : 해당 포켓몬 정보
2. pokemon/1(id)/sprites : 해당 포켓몬 이미지
3. pokemon-species/1(id)/names[2].name : 한국이름
*/
