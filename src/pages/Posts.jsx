import { Link, NavLink, useSearchParams } from 'react-router-dom';
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

  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('filter');
  const filteredData = posts.filter(post =>
    post.title.toLowerCase().includes(value || '')
  );

  return (
    <div>
      <CreateBtn to={`/posts/new`}>Create Post</CreateBtn>
      <input
        type="text"
        value={value}
        placeholder="find..."
        onChange={event =>
          setSearchParams({ filter: event.currentTarget.value })
        }
        style={{ border: '2px solid black', marginTop: '40px' }}
      />
      <ul>
        {filteredData.map(post => (
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
