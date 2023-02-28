import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export const Editpost = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit Post {id}</h1>
      <Link to="/posts" style={{ color: 'black' }}>
        Done
      </Link>
    </div>
  );
};
