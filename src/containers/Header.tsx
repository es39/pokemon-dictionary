import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>
      <FiMenu />
      <div></div>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  width: 100vw;
  height: 60px;
  background: red;
`;
