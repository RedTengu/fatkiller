// React Router
import { useLocation } from 'react-router-dom';
// Redux
import { useAppDispatch, useAppSelector } from '../../hook';
// Slice
import { userWeightPostDelete, userKcalPostDelete, userWorkoutPostDelete} from '../../slices/userSlice';

// Components
import WeightStat from '../WeightStat/WeightStat';
import KcalStat from '../KcalStat/KcalStat';
import WorkoutStat from '../WorkoutStat/WorkoutStat';

// CSS
import './StatsList.css';

function StatsList() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const weightDiary = useAppSelector(state => state.user.weightDiary);
  const kcalDiary = useAppSelector(state => state.user.kcalDiary);
  const workoutDiary = useAppSelector(state => state.user.workoutDiary);

  const weightLocation = '/stats/weight';
  const kcalLocation = '/stats/kcal';
  const workoutLocation = '/stats/workout';

  const deleteWeightPost = (id: string) => {
    dispatch(userWeightPostDelete(id));
  }

  const deleteKcalPost = (id: string) => {
    dispatch(userKcalPostDelete(id));
  }

  const deleteWorkoutPost = (id: string) => {
    dispatch(userWorkoutPostDelete(id));
  }
  
  // Разместить по внутренним компонентам или нет?
  // Заглушка, если записей нет.
  // HOC?
  
  return (
    <ul className="stats-list">
      {
        location.pathname === weightLocation && weightDiary.map(item => {
          return <WeightStat 
                    key={item.id}
                    id={item.id}
                    weight={item.weight}
                    date={item.date}
                    onDelete={deleteWeightPost} />
        })
      }
      {
        location.pathname === kcalLocation && kcalDiary.map(item => {
          return <KcalStat 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    kcal={item.kcal}
                    date={item.date}
                    onDelete={deleteKcalPost} />
        })
      }
      {
        location.pathname === workoutLocation && workoutDiary.map(item => {
          return <WorkoutStat 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    burnedKcal={item.burnedKcal}
                    date={item.date}
                    onDelete={deleteWorkoutPost} />
        })
      }
    </ul>
  );
}

export default StatsList;