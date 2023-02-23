import { Outlet } from 'react-router';
import { AppBar } from './AppBar';
import { Box } from './Box';
export const Layout = () => {
  return (
    <Box display="grid" gridTemplateColumns="200px 1fr">
      <AppBar />
      <Outlet />
    </Box>
  );
};
