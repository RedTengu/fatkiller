// React
import { useEffect } from 'react';
// Redux
import { useAppDispatch, useAppSelector } from '../../hook';
// Slice
import { userTotalWeight, userTotalKcal } from '../../slices/userSlice';

// Функция расчета калорий
import kcalCalc from '../../utils/kcalСalc';

// CSS
import './StatToday.css';

function StatToday() {
  // разобраться с перерендером
  const dispatch = useAppDispatch();
  
  const gender = useAppSelector(state => state.user.gender);
  const age = useAppSelector(state => state.user.age);
  const height = useAppSelector(state => state.user.height);
  const objective = useAppSelector(state => state.user.objective);
  const weight = useAppSelector(state => state.user.weight);

  const totalKcal = useAppSelector(state => state.totalKcal);
  const todayDate = useAppSelector(state => state.todayDate);

  const kcalPosts = useAppSelector(state=> state.user.kcalDiary);
  const workoutPosts = useAppSelector(state => state.user.workoutDiary);

  /* 
    Как работает эта функция:
      Если вес не true тем или иным образом - возвращать 0.
      1. Функция расчета калорий вернет начальное значение исходя из параметров человека.
      2. Сложатся все значения записей калорий и сожженных калорий по отдельности, но только за сегодняшний день.
      3. От начального значения отнимаются все калории полученные за день и плюсуются сожженные, чтобы получить итоговый остаток на день.
  */
  const totalCalc = () => {
    if (!weight) {
      return 0;
    } else {
      const initialCalc = kcalCalc(gender, age, height, weight, objective);
      const allKcalToday = kcalPosts.filter(post => post.date === todayDate).reduce((s, i) => s = s + i.kcal, 0);
      const allWorkoutToday = workoutPosts.filter(post => post.date === todayDate).reduce((s, i) => s = s + i.burnedKcal, 0);

      return initialCalc - allKcalToday + allWorkoutToday;
    }
  };

  // Прогружаем в виджет итоговый вес и остаток калорий
  useEffect(() => {  
    dispatch(userTotalWeight());
    dispatch(userTotalKcal(totalCalc()));
  }, [totalCalc]);
  
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