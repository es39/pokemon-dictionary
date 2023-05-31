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
        {pokemon.map((el: any, index: number /* el interface 설정하기 */) => (
          <li key={index}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokeDictionary;
