import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <a className="footer__link footer__text regular hover-link" 
        href="https://github.com/RedTengu" 
        target='_blank' 
        rel="noreferrer">Github</a>
      <span className="footer__text regular">RedTengu &copy;</span>
    </footer>
  );
}

export default Footer;