import { useSelector } from 'react-redux';

import './StatToday.css';

function StatToday() {
  // убрать any
  const totalKcal = useSelector((state: any) => state.totalKcal);
  const { weight } = useSelector((state: any) => state.user);

  return (
    <li className="stat-today card">
      <div className="stat-today__wrapper">
        <p className="stat-today__text">
          Текущий вес:<span className="stat-today__value">{weight}</span>
        </p>
      </div>
      <div className="stat-today__wrapper">
        <p className="stat-today__text regular">
          Осталось ккал:<span className="stat-today__value medium">{totalKcal}</span>
        </p>
      </div>
    </li>
  );
}

export default StatToday;