import DiaryCard from '../DiaryCard/DiaryCard';
import StatToday from '../StatToday/StatToday';
import WorkoutCheck from '../WorkoutCheck/WorkoutCheck';

import './CardList.css';

function CardList() {
  return (
    <ul className="card-list">
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <StatToday />
      <WorkoutCheck />
    </ul>
  );
}

export default CardList;