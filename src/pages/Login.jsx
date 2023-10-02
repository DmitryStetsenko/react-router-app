import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../hook/useLogin";

export const Login = () => {
  const { state } = useLocation();
  const fromPage = state?.from || '/';

  const navigate = useNavigate();

  const { signIn } = useLogin();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const user = form.login.value;

    signIn(user, () => navigate(fromPage));
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label>login: <input type="text" name="login" /></label>
        <button className="btn-login"  type="submit">login</button>
      </form>
    </div>
  );
};
