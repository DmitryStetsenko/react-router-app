import { NavLink } from 'react-router-dom';
import React from 'react';
import { useLogin } from '../hook/useLogin';

const Header = () => {
  const { user, signOut } = useLogin();
  const isActiveHandler = ({isActive}) => isActive ? 'menu-item__link': '';

  return (
    <header className="header">
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item"><NavLink to="/" className={isActiveHandler}>Home</NavLink></li>
          <li className="menu-item"><NavLink to="/blog" className={isActiveHandler}>Blog</NavLink></li>
          <li className="menu-item"><NavLink to="/about" className={isActiveHandler}>About</NavLink></li>
        </ul>

        { user && <button onClick={signOut} className="btn-signOut">signOut</button> }
      </nav>
      
    </header>
  );
};

export default Header;