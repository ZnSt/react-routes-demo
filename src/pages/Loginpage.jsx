import { useLocation, useNavigate } from 'react-router';
import { useAuth } from 'hook/useAuth';

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathName || '/';

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    signin(user, () => navigate(fromPage, { replace: true }));
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Name" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
