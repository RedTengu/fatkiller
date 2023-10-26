import logo from '../../images/logo.png'
import './Logo.css';

function Logo() {
  return (
    <a className="logo-link hover-link" href="#">
      <img className="logo-img" src={logo} alt="Логотип FatKiller" />
    </a>
  );
}

export default Logo;