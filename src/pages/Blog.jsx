import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <Link className="btn-link" to='/blog/new'>Create new post</Link>

      <h1>Blog page</h1>

      <div className="posts">
        {
          posts.map(({ id, title }) => (
            <Link to={`/blog/${ title }`} key={ id } className="post" state={ id }>
              <h3>{ id }. { title }</h3>
            </Link>
          ))
        }

      </div>

    </div>
  );
};
