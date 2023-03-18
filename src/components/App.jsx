import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Posts from 'pages/Posts';
import Post from 'pages/Post';
import About from 'pages/About';
import LoginPage from 'pages/LoginPage';
import NotFound from 'pages/NotFound';

import SharedLayout from './SharedLayout';
import PrivateRoute from 'hoc/PrivateRoute';
import CreatePost from 'pages/CreatePost';
import EditPost from 'pages/EditPost';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />

          <Route
            path="posts/new"
            element={
              <PrivateRoute>
                <CreatePost />
              </PrivateRoute>
            }
          />
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
