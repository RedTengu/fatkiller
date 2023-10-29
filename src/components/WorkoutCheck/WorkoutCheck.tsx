import workoutIcon from '../../images/exercise.svg'
import restingIcon from '../../images/resting.svg'
import './WorkoutCheck.css';

function WorkoutCheck() {
  return (
    <li className="workout-check card">
      <img className="workout-check__icon" src={workoutIcon} alt="" />
      <p className="workout-check__status regular">Вы сегодня не тренировались.</p>
    </li>
  );
}

export default WorkoutCheck;