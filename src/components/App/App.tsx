// React 
import { useEffect } from 'react';
// Redux 
import { useAppDispatch, useAppSelector } from '../../hook';
// Slice 
import { popupCloseAll } from '../../slices/userSlice';

// Components
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import WeightDiaryPopup from '../WeightDiaryPopup/WeightDiaryPopup';
import KcalDiaryPopup from '../KcalDiaryPopup/KcalDiaryPopup';
import WorkoutDiaryPopup from '../WorkoutDiaryPopup/WorkoutDiaryPopup';
import ChangeCityPopup from '../ChangeCityPopup/ChangeCityPopup';

// CSS
import './App.css';

function App() {
  const isWeightPopupOpen = useAppSelector(state => state.popupWeightOpen);
  const isKcalPopupOpen = useAppSelector(state => state.popupKcalOpen);
  const isWorkoutPopupOpen = useAppSelector(state => state.popupWorkoutOpen);
  const isChangeCityPopupOpen = useAppSelector(state => state.popupChangeCityOpen);
  
  const dispatch = useAppDispatch();

  // Обработчик события по клавише
  const handleEscClose = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      dispatch(popupCloseAll());
    }
  }

  // Обработчик события по оверлею
  const handleOverlayClose = (e: MouseEvent) => {
    if ((e.target as Element).classList.contains('diary-popup_opened')) {
      dispatch(popupCloseAll());
    }
  }

  // Если модалка открыта повесить обработчики, иначе удалить.
  useEffect(() => {
    if (isWeightPopupOpen || isKcalPopupOpen || isWorkoutPopupOpen || isChangeCityPopupOpen) {
      document.addEventListener('keydown', handleEscClose);
      document.addEventListener('mousedown', handleOverlayClose);
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('mousedown', handleOverlayClose);
    };
  }, [isWeightPopupOpen, isKcalPopupOpen, isWorkoutPopupOpen, isChangeCityPopupOpen]);

  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
      <WeightDiaryPopup />
      <KcalDiaryPopup />
      <WorkoutDiaryPopup />
      <ChangeCityPopup />
    </>
  );
}

export default App;
