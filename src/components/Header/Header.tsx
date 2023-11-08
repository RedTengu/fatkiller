import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <Logo />
      <nav className="navigation">
        <ul className="navigation__list">
          <li>
            <Link className="navigation__link navigation__link_type_stat hover-link medium" to="/stats">Статистика</Link>
          </li>
          <li>
            <Link className="navigation__link navigation__link_type_acc hover-link medium" to="/profile">Аккаунт</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;