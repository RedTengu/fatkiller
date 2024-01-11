// React 
import { useState, ChangeEvent, FormEvent } from "react";
// Redux 
import { useAppDispatch, useAppSelector } from "../../hook";
// Slice 
import { userWorkoutPostCreate, popupCloseAll } from "../../slices/userSlice";

// Components
import DiaryPopup from "../DiaryPopup/DiaryPopup";

// Библиотеки
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import 'moment/locale/ru';


function WorkoutDiaryPopup() {
  const dispatch = useAppDispatch();
  const isPopupOpen = useAppSelector(state => state.popupWorkoutOpen);
  
  // Стейт для начальных значений инпутов
  const [values, setValues] = useState({
    name: '',
    burnedKcal: ''
  });

  // Извлекаем значения всех инпутов в стейт
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  // Сброс формы
  const handleFormReset = () => {
    setValues({
      name: '',
      burnedKcal: ''
    });
  }

  // Формируем объект для создания записи и диспатчим
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = moment().format('L');
    
    dispatch(userWorkoutPostCreate({
      id: uuidv4(),
      date,
      name: values.name,
      burnedKcal: +values.burnedKcal
    }))
    
    dispatch(popupCloseAll());

    handleFormReset();
  }

  return (
    <DiaryPopup isOpen={isPopupOpen} onSubmit={handleSubmit} title="Новая запись">
      <input
        className="diary-popup__text-input" 
        onChange={handleChange}
        type="text"
        name="name"
        minLength={3}
        maxLength={10}
        value={values.name}
        placeholder="Название"
        required />
      <input
        className="diary-popup__text-input"
        onChange={handleChange} 
        type="number"
        name="burnedKcal"
        min={1}
        max={2000}
        value={values.burnedKcal}
        placeholder="Сожженые калории"
        required />
    </DiaryPopup>
  );
}

export default WorkoutDiaryPopup;