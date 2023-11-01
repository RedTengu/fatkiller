import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  return (
    <main className="content center">
      <section className="not-found">
        <h1 className="not-found__title medium">404</h1>
        <p className="not-found__subtitle medium">Такой страницы не существует</p>
        <Link className="not-found__link semibold hover-link" to="/">На главную</Link>
      </section>
    </main>
  );
}

export default NotFound;