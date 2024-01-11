// React
import { useState, ChangeEvent, FormEvent  } from "react";
// Redux
import { useAppDispatch, useAppSelector } from "../../hook";
// Slice
import { userWeightPostCreate, popupCloseAll } from "../../slices/userSlice";

// Components
import DiaryPopup from "../DiaryPopup/DiaryPopup";

// Библиотеки
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import 'moment/locale/ru';


function WeightDiaryPopup() {
  const dispatch = useAppDispatch();
  const isPopupOpen = useAppSelector(state => state.popupWeightOpen);
  
  // Стейт для начальных значений инпутов
  const [values, setValues] = useState({
    currentWeight: ''
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
      currentWeight: ''
    });
  }

  // Формируем объект для создания записи и диспатчим
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = moment().format('L');
    
    dispatch(userWeightPostCreate({
      id: uuidv4(),
      date,
      weight: +values.currentWeight,
    }))

    dispatch(popupCloseAll());

    handleFormReset();
  }

  return (
    <DiaryPopup isOpen={isPopupOpen} onSubmit={handleSubmit} title="Новая запись" >
      <input
        className="diary-popup__text-input"
        onChange={handleChange}
        type="number"
        name="currentWeight"
        value={values.currentWeight}
        min={35}
        max={300}
        placeholder="Текущий вес" />
    </DiaryPopup>
  );
}

export default WeightDiaryPopup;