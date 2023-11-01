import DiaryCard from '../DiaryCard/DiaryCard';
import StatToday from '../StatToday/StatToday';
import WorkoutCheck from '../WorkoutCheck/WorkoutCheck';
import Weather from '../Weather/Weather';

import weightCardImg from '../../images/weight-card.jpg'
import kcalCardImg from '../../images/kcal-card.jpg'
import workoutCardImg from '../../images/workout-card.jpg'
import './CardList.css';

function CardList() {
  return (
    <ul className="card-list">
      <DiaryCard 
        title="Дневник веса" 
        style={{ backgroundImage: `url(${weightCardImg})` }} />
      <DiaryCard 
        title="Дневник калорий" 
        style={{ backgroundImage: `url(${kcalCardImg})` }}/>
      <DiaryCard 
        title="Дневник тренировок" 
        style={{ backgroundImage: `url(${workoutCardImg})` }}/>
      <StatToday />
      <WorkoutCheck />
      <Weather />
    </ul>
  );
}

export default CardList;