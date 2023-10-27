import Card from '../DiaryCard/DiaryCard';
import StatToday from '../StatToday/StatToday';

import './CardList.css';

function CardList() {
  return (
    <ul className="card-list">
      <Card />
      <Card />
      <Card />
      <StatToday />
    </ul>
  );
}

export default CardList;