// React 
import { useState, ChangeEvent } from "react";
// Redux 
import { useAppDispatch, useAppSelector } from "../../hook";
// Slice 
import { changeCity, popupCloseAll } from "../../slices/userSlice";

// Components
import DiaryPopup from "../DiaryPopup/DiaryPopup";

function ChangeCityPopup() {
  const dispatch = useAppDispatch();

  const isPopupOpen = useAppSelector(state => state.popupChangeCityOpen);
  
  // Стейт для начальных значений инпутов
  const [values, setValues] = useState({
    city: ''
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
      city: ''
    });
  }

  // Диспатчим измененный город
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch(changeCity({
      city: values.city,
    }))

    dispatch(popupCloseAll());

    handleFormReset();
  }

  return (
    <DiaryPopup isOpen={isPopupOpen} onSubmit={handleSubmit} title="Изменить город">
      <input
        className="diary-popup__text-input"
        onChange={handleChange}
        type="text"
        name="city"
        value={values.city}
        minLength={3}
        maxLength={20}
        placeholder="Ваш город"
        required />
    </DiaryPopup>
  );
}

export default ChangeCityPopup;