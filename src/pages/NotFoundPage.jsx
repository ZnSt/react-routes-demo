import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <div>Not Found 404</div>
      <Link to="/" style={{ color: 'red' }}>
        Go Home
      </Link>
    </div>
  );
};
