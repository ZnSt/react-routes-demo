import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Blog</h1>
      <Link to="/posts/new" style={{ color: 'black' }}>
        Add new post
      </Link>
      <ul>
        {posts.map((post, index) => (
          <Link key={index} to={`${post.id}`} style={{ color: 'black' }}>
            <li>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
