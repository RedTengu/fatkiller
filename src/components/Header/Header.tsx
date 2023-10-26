import Logo from '../Logo/Logo';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <Logo />
      <a className="acc-link hover-link medium" href="#">Аккаунт</a>
    </header>
  );
}

export default Header;