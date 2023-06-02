import { BeatLoader } from 'react-spinners';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Container>
      <BeatLoader color="#ff8080" speedMultiplier={1} />
    </Container>
  );
};

export default Loader;

const Container = styled.main`
  width: 100vw;
  align-items: center;
`;
