// React
import { useState, useRef, ChangeEvent, FormEvent } from 'react';
// Redux
import { useAppDispatch, useAppSelector } from '../../hook';
// Slice
import { editUserInfo } from "../../slices/userSlice";
// CSS
import './Profile.css';

function Profile() {
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const username = useAppSelector(state => state.user.username);
  const email = useAppSelector(state => state.user.email);
  const gender = useAppSelector(state => state.user.gender);
  const age = useAppSelector(state => state.user.age);
  const height = useAppSelector(state => state.user.height);
  const weight = useAppSelector(state => state.user.weight);
  const objective = useAppSelector(state => state.user.objective);

  const [ isEditClicked, setIsEditClicked ] = useState(false);
  const [ isDisabled, setIsDisabled ] = useState(true);

  const [values, setValues] = useState({
    username,
    email,
    gender,
    age,
    height,
    weight,
    objective,
  });

  // Реф поля для фокуса
  const setInputFocus = () => {
    inputRef.current?.focus();
  }

  // При нажатии меняем кнопки
  const handleEditClick = async () => {
    await setIsDisabled(false);
    await setIsEditClicked(true);
    setInputFocus();
  }

  // Извлекаем значения всех инпутов в стейт
  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value
    });
  }
  
  // Формируем объект для изменения профиля, диспатчим, меняем кнопки обратно
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch(editUserInfo(values));

    setIsDisabled(true);
    setIsEditClicked(false);
  }
  
  return (
    <section className="profile">
      <form className="profile__form" onSubmit={handleSubmit}>
        <label className="profile__form-label" htmlFor="username">
          Имя
          <input
            className="profile__input" 
            type="text" 
            name="username" 
            id="username"
            placeholder="Введите имя"
            ref={inputRef}
            value={values.username}
            onChange={handleChange}
            disabled={isDisabled} />
        </label>
        <label className="profile__form-label" htmlFor="email">
          Email
          <input
            className="profile__input"  
            type="email" 
            name="email" 
            id="email"
            placeholder="example@mail.com"
            value={values.email}
            onChange={handleChange}
            disabled={isDisabled} />
        </label>
        <label className="profile__form-label" htmlFor="gender">
          Пол
          <select
            className="profile__select" 
            name="gender" 
            id="gender"
            value={values.gender}
            onChange={handleChange}
            disabled={isDisabled}>   
              <option value="M">Мужской</option>
              <option value="F">Женский</option>
          </select>
        </label>
        <label className="profile__form-label" htmlFor="age">
          Возраст
          <input
            className="profile__input"  
            type="number" 
            name="age" 
            id="age"
            placeholder="Ваш возраст"
            value={values.age}
            onChange={handleChange}
            disabled={isDisabled} />
        </label>
        <label className="profile__form-label" htmlFor="height">
          Рост
          <input
            className="profile__input"  
            type="number" 
            name="height" 
            id="height"
            placeholder="Ваш рост"
            value={values.height}
            onChange={handleChange}
            disabled={isDisabled} />
        </label>
        <label className="profile__form-label" htmlFor="objective">
          Цель
          <select
            className="profile__select" 
            name="objective" 
            id="objective"
            value={values.objective}
            onChange={handleChange}
            disabled={isDisabled}>   
              <option value="loss">Похудение</option>
              <option value="safe">Сохранение веса</option>
              <option value="gain">Набор веса</option>
          </select>
        </label>
        { isEditClicked && <button type="submit" className="profile__edit-btn hover-link">Сохранить</button> }
        { isDisabled && <button type="button" className="profile__edit-btn hover-link" onClick={handleEditClick}>Редактировать</button> }
      </form>
    </section>
  );
}

export default Profile;