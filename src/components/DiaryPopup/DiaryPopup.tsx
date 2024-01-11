// React 
import { ReactNode, FormEvent } from 'react';
// Redux 
import { useAppDispatch } from '../../hook';
// Slice 
import { popupCloseAll } from '../../slices/userSlice';

// CSS
import './DiaryPopup.css';

interface IDiaryPopupProps {
  isOpen: boolean,
  onSubmit: (e: FormEvent<HTMLFormElement>) => void,
  title: string,
  children: ReactNode
}

function DiaryPopup({isOpen, onSubmit, title, children}: IDiaryPopupProps) {
  const dispatch = useAppDispatch();

  // Закрыть все попапы
  const closePopup = () => {
    dispatch(popupCloseAll());
  }

  return (
    <div className={`diary-popup ${isOpen ? "diary-popup_opened" : ""}`}>
      <div className="diary-popup__body">
        <h2 className="diary-popup__title">{title}</h2>
        <form className="diary-popup__form" onSubmit={onSubmit}>
          {children}
          <button 
            className="diary-popup__submit diary-popup__submit_active hover-link" 
            type="submit" 
            aria-label="Добавить запись">
              Сохранить
          </button>
        </form>
        <button className="diary-popup__close-btn hover-link" onClick={closePopup} type="button" aria-label="Закрыть окно редактирования" />
      </div>
    </div>
  );
}

export default DiaryPopup;