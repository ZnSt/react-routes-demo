import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';
const SharedLayout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="text-4xl text-white font-bold py-6 px-4 bg-cyan-400 flex justify-center gap-2 ">
        <NavLink to="/">home</NavLink>
        <NavLink to="/posts">posts</NavLink>
        <NavLink to="/about">about</NavLink>
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
