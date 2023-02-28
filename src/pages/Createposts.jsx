import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router';

export const Createposts = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Create Post</h1>
      <button onClick={() => signout(() => navigate('/', { replace: true }))}>
        Log Out
      </button>
    </div>
  );
};
