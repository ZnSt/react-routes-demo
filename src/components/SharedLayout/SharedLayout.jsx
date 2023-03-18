import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { Context } from 'hoc/AuthProvider';
const SharedLayout = () => {
  const navigate = useNavigate();
  const { logout } = useContext(Context);
  return (
    <div>
      <header className="text-4xl text-white font-bold py-6 px-4 bg-cyan-400 flex  gap-3">
        <NavLink to="/">home</NavLink>
        <NavLink to="/posts">posts</NavLink>
        <NavLink to="/about">about</NavLink>

        <div className="flex gap-3 ml-[800px]">
          <button onClick={() => navigate('/login')}>log in</button>
          <button onClick={() => logout(() => navigate('/'))}>log out</button>
        </div>
      </header>

      <main>
        <div
          style={{
            display: 'flex',
            gap: '20px',
          }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              backgroundColor: 'transparent',
              border: '2px solid black',
            }}
          >
            Go Back
          </button>
          <button
            onClick={() => navigate(+1)}
            style={{
              backgroundColor: 'transparent',
              border: '2px solid black',
            }}
          >
            Go Next
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
