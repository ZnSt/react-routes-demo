import { Context } from 'hoc/AuthProvider';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';

const LoginPage = () => {
  const location = useLocation();
  const fromPage = location.state?.from?.pathname ?? '/';
  const navigate = useNavigate();
  const { login } = useContext(Context);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
    if (userName !== '') {
      login(userName, () => navigate(fromPage));
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          style={{ border: '3px solid black' }}
        />
        <button
          type="submit"
          style={{ border: '2px solid black', borderRadius: '4px' }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
