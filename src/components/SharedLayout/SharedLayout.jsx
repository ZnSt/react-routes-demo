import { Outlet } from 'react-router';
import { HeaderG, Nav, StyeldLink, Logo } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <HeaderG>
        <Logo>LOGO</Logo>
        <Nav>
          <StyeldLink to="/">Home</StyeldLink>
          <StyeldLink to="/products">Products</StyeldLink>
          <StyeldLink to="/about">About</StyeldLink>
        </Nav>
      </HeaderG>
      <Outlet />
    </>
  );
};
