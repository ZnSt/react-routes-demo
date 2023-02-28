import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderG = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  background-color: purple;
`;

export const Logo = styled.p`
  font-weight: bold;
  font-size: 30px;
  color: red;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StyeldLink = styled(NavLink)`
  text-decoration: none;
  color: violet;

  :hover {
    color: white;
  }

  &.active {
    border-bottom: 2px solid white;
  }
`;
