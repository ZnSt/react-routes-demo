import { Outlet } from 'react-router-dom';
import { CustomLink } from 'components/CustomLink';

export const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>2023</footer>
    </>
  );
};
