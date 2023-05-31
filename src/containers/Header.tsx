import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>
      <FiMenu />
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  width: 100vw;
  height: 60px;
  background: red;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  position: fixed;
`;
