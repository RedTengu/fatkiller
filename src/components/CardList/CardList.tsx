import DiaryCard from '../DiaryCard/DiaryCard';
import StatToday from '../StatToday/StatToday';

import './CardList.css';

function CardList() {
  return (
    <ul className="card-list">
      <DiaryCard />
      <DiaryCard />
      <DiaryCard />
      <StatToday />
    </ul>
  );
}

export default CardList;