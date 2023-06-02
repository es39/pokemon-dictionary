import pokeAxios from 'api/pokeAxios';
import { pokemonName } from 'interfaces/Pokemon.interface';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Loader from './Loader';

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState([]);
  // const [pokeImg, setPokeImg] = useState('');
  const [pokeType, setPokeType] = useState([]);
  // const [pokeId, setPokeId] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const axiosNum = 9;
  // const pokeId = 1;

  const handleCardClick = (id: number) => {
    navigate(`/${id}`);
  };

  const getPokemonList = () => {
    pokeAxios
      .get(`/pokemon?limit=${axiosNum}`)
      .then(res => {
        // console.log(res.data.results);
        setPokemon(res.data.results);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  const getPokemonImg = async () => {
    await pokeAxios
      .get(`/pokemon`, { params: { limit: 151 } })
      .then(res => {
        console.log(res.data);
        // console.log(res.data);
        // setPokeImg(res.data.sprites.front_default);
        setPokeType(res.data.types);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPokemonImg();
  }, []);

  return (
    <CardStyle>
      {isLoading ? (
        <Loader />
      ) : (
        pokemon &&
        pokemon.map((el: pokemonName, idx: number) => (
          <li
            className="pokemon-card"
            key={idx}
            onClick={() => handleCardClick(idx)}
          >
            <CardContent>
              {/* <img src={pokeImg[idx]} /> */}
              {el.name}
              <TypeContent>
                {pokeType &&
                  pokeType.map((el: any, idx: number) => (
                    <li key={idx}>{el.type.name}</li>
                  ))}
              </TypeContent>
            </CardContent>
          </li>
        ))
      )}
    </CardStyle>
  );
};

export default PokemonCard;

const CardStyle = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 5px;
  height: 100vh;
  width: 100vw;
  .pokemon-card {
    list-style: none;
    padding: 5px;
    width: 90%;
    height: 90%;
    text-align: center;
    background-color: white;
    margin: 5px;
    cursor: pointer;
    border-radius: 10px;
    border: #eaeaea 0.5px solid;
    &:hover {
      box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TypeContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  > li {
    padding: 5px;
  }
`;

/* FIXME: 
1. pokemon/1(id) : 해당 포켓몬 정보
2. pokemon/1(id)/sprites : 해당 포켓몬 이미지
3. pokemon-species/1(id)/names[2].name : 한국이름
*/

/* TODO:
1. 필요한 데이터들만 모아서 인터페이스로 만들기?
1-1. 각 포켓몬 id를 통해 해당 포켓몬의 정보를 가져올 수 있음 
1-2. id들을 모아서 정보를 어떻게 다 모으지??
2. 이후 map으로 한번에 다 보여주기
*/
