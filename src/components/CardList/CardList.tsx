import DiaryCard from '../DiaryCard/DiaryCard';
import StatToday from '../StatToday/StatToday';
import WorkoutCheck from '../WorkoutCheck/WorkoutCheck';
import Weather from '../Weather/Weather';

import './CardList.css';

function CardList() {
  return (
    <ul className="card-list">
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <StatToday />
      <WorkoutCheck />
      <Weather />
    </ul>
  );
}

export default CardList;