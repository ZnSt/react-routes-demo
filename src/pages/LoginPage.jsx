import { useLocation } from 'react-router';

const LoginPage = () => {
  const location = useLocation();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const userName = form.userName.value;
  };
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userName" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
