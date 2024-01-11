// React Router
import { Outlet, NavLink } from 'react-router-dom';

// CSS
import './StatFull.css';

function StatFull() {
  return (
    <section className="stats">
      <nav className="stats-navigation">
        <ul className="stats-navigation__list">
          <li>
            <NavLink 
              className={({isActive}) => `stats-navigation__link ${isActive ? "stats-navigation__link_active" : ""} hover-link`} 
              to="weight">
                Вес
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={({isActive}) => `stats-navigation__link ${isActive ? "stats-navigation__link_active" : ""} hover-link`} 
              to="kcal">
                Калории
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={({isActive}) => `stats-navigation__link ${isActive ? "stats-navigation__link_active" : ""} hover-link`} 
              to="workout">
                Тренировки
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
}

export default StatFull;