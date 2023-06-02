import PokemonCard from 'components/PokemonCard';
import styled from 'styled-components';

const PokeDictionary = () => {
  return (
    <Container>
      <SearchBar>검색창</SearchBar>
      <CardContainer>
        <PokemonCards>
          <PokemonCard />
        </PokemonCards>
      </CardContainer>
    </Container>
  );
};

export default PokeDictionary;

const Container = styled.main`
  width: 100vw;
  background-color: yellow;
  flex-direction: column;
`;

const SearchBar = styled.section`
  display: flex;
  background-color: white;
  width: 100vw;
  height: 50px;
`;

const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PokemonCards = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 80%;
  height: 100%;
`;

/* TODO:
1. 로딩 화면 구현 * 
*/
