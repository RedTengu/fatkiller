import { ReactNode } from 'react';
import './DiaryPopup.css';

type DiaryPopupType = {
  isOpen: boolean,
  children: ReactNode
}

function DiaryPopup({isOpen, children}: DiaryPopupType) {
  return (
    <div className={`diary-popup ${isOpen ? "diary-popup_opened" : ""}`}>
      <div className="diary-popup__body">
        <h2 className="diary-popup__title">Новая запись</h2>
        <form className="diary-popup__form">
          {children}
          <button 
            className="diary-popup__submit diary-popup__submit_active hover-link" 
            type="submit" 
            aria-label="Добавить запись">
              Записать
          </button>
        </form>
        <button className="diary-popup__close-btn hover-link" type="button" aria-label="Закрыть окно редактирования" />
      </div>
    </div>
  );
}

export default DiaryPopup;