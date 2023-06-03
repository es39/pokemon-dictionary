import PokemonCard from 'components/PokemonCard';
import SearchBar from 'components/SearchBar';
import styled from 'styled-components';

const PokeDictionary = () => {
  return (
    <Container>
      <SearchBar />
      <CardContainer>
        <PokemonCards>
          <PokemonCard />
        </PokemonCards>
      </CardContainer>
    </Container>
  );
};

export default PokeDictionary;

const Container = styled.section`
  width: 100%;
  background-color: yellow;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  width: 100%;
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
