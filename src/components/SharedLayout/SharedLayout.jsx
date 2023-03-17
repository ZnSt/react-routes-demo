import { NavLink, Outlet } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <div>
      <header className="text-4xl text-white font-bold py-6 px-4 bg-cyan-400 flex justify-center gap-2 ">
        <NavLink to="/">home</NavLink>
        <NavLink to="/posts">posts</NavLink>
        <NavLink to="/about">about</NavLink>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
