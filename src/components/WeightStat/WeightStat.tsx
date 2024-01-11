// React 
import { useRef, useState, ChangeEvent, FormEvent } from 'react';
// Redux
import { useAppDispatch } from '../../hook';
// Slice
import { userWeightPostEdit } from '../../slices/userSlice';

// CSS
import './WeightStat.css';

interface IWeightStatProps {
  id: string;
  date: string;
  weight: number;
  onDelete: (id: string) => void;
};

function WeightStat({id, date, weight, onDelete}: IWeightStatProps) {
  const dispatch = useAppDispatch();

  // Реф поля для фокуса
  const inputRef = useRef<HTMLInputElement>(null);

  const [isEditClicked, setIsEditClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [values, setValues] = useState({ weight });

  const setInputFocus = () => {
    inputRef.current?.focus();
  }

  // При нажатии меняем кнопки, устанавливаем фокус
  const handleEditClick = async () => {
    await setIsEditClicked(true);
    await setIsDisabled(false);
    setInputFocus();
  }

  // Извлекаем значения всех инпутов в стейт
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  // Формируем объект для изменения записи, диспатчим, меняем кнопки обратно
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch(userWeightPostEdit({
      id,
      weight: +values.weight,
    }));

    setIsDisabled(true);
    setIsEditClicked(false);
  }

  return (
    <li className="stats-list__elem">
      <form className="stats-list__form" onSubmit={handleSubmit}>
        <p className="stats-list__elem-date">{date}</p>
        <div className="stats-list__wrapper">
          <input 
            className="stats-list__input medium" 
            type="number" 
            name="weight"
            min={35}
            max={300}
            ref={inputRef}
            onChange={handleChange}
            value={values.weight}
            disabled={isDisabled}
            required />
          <span className="stats-list__elem-measure regular">кг</span>
        </div>
        <div className="stats-list__elem-btns">
          {
            isDisabled && <button 
            className="stats-list__btn stats-list__elem-edit hover-link" 
            onClick={handleEditClick} 
            type="button" 
            aria-label="Редактировать запись" />
          }
          {
            isEditClicked && <button 
            className="stats-list__btn stats-list__elem-submit hover-link"
            type="submit" 
            aria-label="Сохранить" />
          }     
          <button 
            className="stats-list__btn stats-list__elem-delete hover-link" 
            onClick={() => onDelete(id)} 
            type="button" 
            aria-label="Удалить запись" />
        </div>
      </form>
    </li>
  );
}

export default WeightStat;