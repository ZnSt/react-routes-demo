import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      });
  }, []);
  return (
    <div>
      <CreateBtn to={`/posts/new`}>Create Post</CreateBtn>

      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CreateBtn = styled(NavLink)`
  background-color: transparent;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  width: 100px;
  display: block;
  text-align: center;
`;

export default Posts;
