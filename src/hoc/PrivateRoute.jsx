import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { Context } from './AuthProvider';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(Context);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
