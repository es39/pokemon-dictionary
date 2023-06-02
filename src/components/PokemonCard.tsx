import { type } from 'interfaces/Pokemon.interface';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Loader from './Loader';

const PokemonCard = () => {
  const [pokeInfo, setPokeInfo] = useState<any>([]);
  const [pokeName, setPokeName] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/${id}`);
  };

  // * 1세대 기준 포켓몬 정보
  const fetchPokemonInfo = () => {
    const infoArr = [];
    for (let i = 1; i <= 151; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      infoArr.push(fetch(url).then(res => res.json()));
    }
    Promise.all(infoArr)
      .then(res => {
        const pokeInfo = res.map(el => ({
          name: el.name,
          image: el.sprites['front_default'],
          type: el.types.map((type: type) => type.type.name).join(', '),
          id: el.id,
        }));
        setIsLoading(false);
        return pokeInfo;
      })
      .then(res => {
        setPokeInfo(res);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchPokemonInfo();
  }, []);

  // * 1세대 기준 포켓몬 한글 이름
  const fetchPokemonName = () => {
    const nameArr = [];
    for (let i = 1; i <= 151; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon-species/${i}`;
      nameArr.push(fetch(url).then(res => res.json()));
    }
    Promise.all(nameArr)
      .then(res => {
        // console.log(res[0]);
        const pokeName = res.map(el => ({
          id: el.id,
          koreaName: el.names[2].name,
        }));
        setIsLoading(false);
        return pokeName;
      })
      .then(res => {
        setPokeName(res);
      })
      .catch(err => console.log(err));
  };
  // console.log(pokeName);
  useEffect(() => {
    fetchPokemonName();
  }, []);

  return (
    <CardStyle>
      {isLoading ? (
        <Loader />
      ) : (
        pokeInfo &&
        pokeName &&
        pokeInfo.map((el: any, infoId: number) => (
          <li
            className="pokemon-card"
            key={infoId + 1}
            onClick={() => handleCardClick(infoId + 1)}
          >
            <CardContent>
              <img src={el.image} />
              {pokeName.map((el: any, nameId: number) =>
                infoId === nameId ? (
                  <li key={nameId + 1}>{el.koreaName}</li>
                ) : null
              )}
              <div>{el.type}</div>
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
  padding: 5px;
  > div {
    padding: 5px;
  }
`;

// const TypeContent = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 5px;
//   > li {
//     padding: 5px;
//   }
// `;

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
