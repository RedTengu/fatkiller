// React
import { useEffect, useState } from 'react';
// Redux
import { useAppSelector } from '../../hook';

// CSS
import workoutIcon from '../../images/exercise.svg'
import restingIcon from '../../images/resting.svg'
import './WorkoutCheck.css';

function WorkoutCheck() {
  const [data, setData] = useState({
    icon: workoutIcon,
    message: 'Вы сегодня не тренировались.'
  });

  const todayDate = useAppSelector(state => state.todayDate);
  const isWorkoutToday = useAppSelector(state => state.user.workoutDiary.some(post => post.date === todayDate));

  // Проверка тренировки сегодня
  const workoutTodayCheck = () => {
    if (isWorkoutToday) {
      setData({
        ...data,
        icon: restingIcon,
        message: 'Вы сегодня тренировались.'
      });

      return data;
    } else {
      return data;
    }
  }

  // Отслеживаем изменения
  useEffect(() => {
    workoutTodayCheck();
  }, [isWorkoutToday])

  return (
    <li className="workout-check card">
      <img className="workout-check__icon" src={data.icon} alt="" />
      <p className="workout-check__status regular">{data.message}</p>
    </li>
  );
}

export default WorkoutCheck;