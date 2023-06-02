import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import Loader from 'components/Loader';

const PokemonInfo = () => {
  const navigate = useNavigate();

  const handleBackSpace = () => {
    navigate(-1);
  };

  return (
    <Container>
      <InfoSection>
        <button className="back-btn" onClick={handleBackSpace}>
          <MdOutlineArrowBack />
          뒤로가기
        </button>
        <div>포켓몬 정보 띄워줄 페이지</div>
      </InfoSection>
    </Container>
  );
};

export default PokemonInfo;

const Container = styled.main`
  width: 100vw;
`;

const InfoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .back-btn {
    outline-style: none;
    text-align: center;
  }
`;

/* TODO:
1. id props
2. id별로 포켓몬 정보 띄워주기
3. Loader add
*/
