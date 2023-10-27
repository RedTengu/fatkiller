import './StatToday.css';

function StatToday() {
  return (
    <li className="stat-today card">
      <div className="stat-today__wrapper">
        <p className="stat-today__text">
          Текущий вес:<span className="stat-today__value">80</span>
        </p>
      </div>
      <div className="stat-today__wrapper">
        <p className="stat-today__text regular">
          Осталось ккал:<span className="stat-today__value medium">1285</span>
        </p>
      </div>
    </li>
  );
}

export default StatToday;