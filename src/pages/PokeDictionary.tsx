import styled from 'styled-components';

const PokeDictionary = () => {
  return (
    <Container>
      <SearchBar>검색창</SearchBar>
      <PokemonCards>카드 띄울 공간</PokemonCards>
    </Container>
  );
};

export default PokeDictionary;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: purple;
  flex-direction: column;
  justify-content: start;
`;

const SearchBar = styled.section`
  display: flex;
  background-color: white;
  width: 100vw;
  height: 50px;
`;

const PokemonCards = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
