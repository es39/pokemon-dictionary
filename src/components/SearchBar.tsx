import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';

const SearchBar = () => {
  return (
    <Container>
      <SearchArea>
        <SearchWrapper>
          <SearchIcon />
        </SearchWrapper>
      </SearchArea>
    </Container>
  );
};

export default SearchBar;

const Container = styled.section`
  width: 100vw;
  min-height: 50px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchArea = styled.div`
  background-color: white;
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: baseline;
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0);
`;

const SearchWrapper = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: calc(100% / 10);
  height: 100%;
  cursor: pointer;
  background: transparent;
  border: none;
  width: 90%;
`;

const SearchIcon = styled(BiSearch)`
  color: red;
  font-weight: bold;
  font-size: 2em;
  cursor: pointer;
`;
