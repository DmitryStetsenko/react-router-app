import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

export const Single = () => {
  // const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  const btnReturnHandler = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${ state }`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [state]);

  return (
    <div>
      {/* <Link to="/blog">return to blog</Link> */}

      <button onClick={ btnReturnHandler }>Return to blog...</button>

      <h2>{ post.title }</h2>
      <p className="content">
        { post.body }
      </p>
    </div>
  );
};