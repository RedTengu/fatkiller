// React Router
import { Link } from 'react-router-dom';

// CSS
import logo from '../../images/logo.png'
import './Logo.css';

function Logo() {
  return (
    <Link className="logo-link hover-link" to="/">
      <img className="logo-img" src={logo} alt="Логотип FatKiller" />
    </Link>
  );
}

export default Logo;