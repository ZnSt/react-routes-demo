import { HeaderG, Nav, StyeldLink, Logo } from './Header.styled';

export const Header = () => {
  return (
    <HeaderG>
      <Logo>LOGO</Logo>
      <Nav>
        <StyeldLink to="/">Home</StyeldLink>
        <StyeldLink to="/products">Products</StyeldLink>
        <StyeldLink to="/about">About</StyeldLink>
      </Nav>
    </HeaderG>
  );
};
