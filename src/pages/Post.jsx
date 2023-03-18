import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => {
        setPost(data);
      });
  }, [id]);
  return (
    <div>
      <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>{post.title}</h2>
      <p>{post.body}</p>
      <EditBtn to={`/posts/${id}/edit`}>Edit</EditBtn>
    </div>
  );
};

const EditBtn = styled(NavLink)`
  background-color: transparent;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  width: 70px;
  display: block;
  text-align: center;
`;

export default Post;
