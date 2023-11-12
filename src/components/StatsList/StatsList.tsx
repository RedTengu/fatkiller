import { useLocation } from 'react-router-dom';

import WeightStat from '../WeightStat/WeightStat';
import KcalStat from '../KcalStat/KcalStat';
import WorkoutStat from '../WorkoutStat/WorkoutStat';
import { data } from '../../utils/data';

import './StatsList.css';

function StatsList() {
  const location = useLocation();
  
  const weightLocation = '/stats/weight';
  const kcalLocation = '/stats/kcal';
  const workoutLocation = '/stats/workout';

  // HOC?

  return (
    <ul className="stats-list">
      {
        location.pathname === weightLocation && data.weightDiary.map(item => {
          return <WeightStat 
                    key={item.id}
                    weight={item.weight}
                    date={item.date} />
        })
      }
      {
        location.pathname === kcalLocation && data.kcalDiary.map(item => {
          return <KcalStat 
                    key={item.id}
                    name={item.name}
                    kcal={item.kcal}
                    date={item.date} />
        })
      }
      {
        location.pathname === workoutLocation && data.workoutDiary.map(item => {
          return <WorkoutStat 
                    key={item.id}
                    name={item.name}
                    kcalReduce={item.burnedKcal}
                    date={item.date} />
        })
      }
    </ul>
  );
}

export default StatsList;