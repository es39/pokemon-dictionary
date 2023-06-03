import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderStyle>
      <IconWrapper>
        <MenuIcon />
      </IconWrapper>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  width: 100%;
  height: 60px;
  background: #ff5656;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  position: fixed;
`;

const IconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const MenuIcon = styled(FiMenu)`
  font-size: 2rem;
  cursor: pointer;
`;
