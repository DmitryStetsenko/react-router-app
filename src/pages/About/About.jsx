import { Link, Outlet } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="contacts">Contacts</Link>
      <Link to="team">Team</Link>

      <p>This is about content</p>

      <div className="content">

        <Outlet />

      </div>

    </div>
  );
};