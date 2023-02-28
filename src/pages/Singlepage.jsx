import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Singlepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  const goBack = () => navigate('/posts', { state: 123 });
  const goHome = () => navigate('/', { replace: true });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [id]);
  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <button onClick={goHome}>Go Home</button>
      {post && (
        <>
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to={`/posts/${id}/edit`} style={{ color: 'black' }}>
              Edit
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
