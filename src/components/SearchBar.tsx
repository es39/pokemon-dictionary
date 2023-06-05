import { ChangeEvent, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const SearchBar = () => {
  // * 검색 상태
  const [pokeSearch, setPokeSearch] = useState<string>('');

  // * 검색 onChange event
  const handlePokemonSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setPokeSearch(e.target.value);
  };

  console.log(pokeSearch);

  // const handleClickSearch = (e: React.MouseEvent) => {

  // }

  return (
    <Container>
      <SearchArea>
        <input
          placeholder="포켓몬 이름을 한글로 입력해주세요..!"
          onChange={handlePokemonSearch}
        ></input>
        <SearchWrapper>
          <SearchIcon />
        </SearchWrapper>
      </SearchArea>
    </Container>
  );
};

export default SearchBar;

const Container = styled.section`
  width: 100%;
  min-height: 50px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`;

const SearchArea = styled.div`
  background-color: white;
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0);
  > input {
    border: none;
    width: 100%;
    height: 90%;
    border-radius: 20px;
    padding-left: 10px;
  }
`;

const SearchWrapper = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 5%;
  height: 100%;
  cursor: pointer;
  background: transparent;
  border: none;
  padding-right: 10px;
`;

const SearchIcon = styled(BiSearch)`
  color: black;
  font-weight: bold;
  font-size: 2em;
  cursor: pointer;
`;

/* TODO:
1. position 속성 알아보기 
*/
