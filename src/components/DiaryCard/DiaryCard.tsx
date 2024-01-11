// Redux imports
import { useAppDispatch } from '../../hook';
// Slice imports
import { weightPopupOpen, kcalPopupOpen, workoutPopupOpen } from '../../slices/userSlice';

// CSS
import './DiaryCard.css';

interface IDiaryCardProps {
  title: string,
  style: React.CSSProperties
};

function DiaryCard ({ title, style }: IDiaryCardProps) {
  const dispatch = useAppDispatch();

  // Открываем нужный попап ориентируясь на название
  const openPopup = () => {
    if(title === 'Дневник веса') {
      dispatch(weightPopupOpen());
    }
    if(title === 'Дневник калорий') {
      dispatch(kcalPopupOpen());
    }
    if(title === 'Дневник тренировок') {
      dispatch(workoutPopupOpen());
    }
  }

  return (
    <button className="diary-btn" onClick={openPopup} type="button">
      <li className="diary-card card" style={style}>
        <h2 className="diary-card__title bold">{title}</h2>
      </li>
    </button>
  );
}

export default DiaryCard;