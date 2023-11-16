import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import WeightStat from '../WeightStat/WeightStat';
import KcalStat from '../KcalStat/KcalStat';
import WorkoutStat from '../WorkoutStat/WorkoutStat';

import './StatsList.css';

function StatsList() {
  const location = useLocation();
  const {weightDiary, kcalDiary, workoutDiary} = useSelector((state: any) => state.user)

  const weightLocation = '/stats/weight';
  const kcalLocation = '/stats/kcal';
  const workoutLocation = '/stats/workout';

  // HOC?
  // убрать any
  return (
    <ul className="stats-list">
      {
        location.pathname === weightLocation && weightDiary.map((item: any) => {
          return <WeightStat 
                    key={item.id}
                    weight={item.weight}
                    date={item.date} />
        })
      }
      {
        location.pathname === kcalLocation && kcalDiary.map((item: any) => {
          return <KcalStat 
                    key={item.id}
                    name={item.name}
                    kcal={item.kcal}
                    date={item.date} />
        })
      }
      {
        location.pathname === workoutLocation && workoutDiary.map((item: any) => {
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