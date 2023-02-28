import { Routes, Route, Navigate } from 'react-router-dom';
import { Homepage } from 'pages/Homepage';
import { About } from 'pages/About';
import { Blog } from 'pages/Blog';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Singlepage } from 'pages/Singlepage';
import { Createposts } from 'pages/Createposts';
import { Editpost } from 'pages/Editpost';
import { LoginPage } from 'pages/Loginpage';
import { Layout } from './Layout';
import { RequireAuth } from 'hoc/RequireAuth';
import { AuthProvider } from 'hoc/AuthProvider';

export const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="about-us" element={<Navigate to="/about" replace />} />
            <Route path="posts/" element={<Blog />} />
            <Route path="posts/:id" element={<Singlepage />} />
            <Route path="posts/:id/edit" element={<Editpost />} />

            <Route
              path="posts/new"
              element={
                <RequireAuth>
                  <Createposts />
                </RequireAuth>
              }
            />
            <Route path="login" element={<LoginPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
};
