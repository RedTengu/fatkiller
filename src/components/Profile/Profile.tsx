import { useSelector } from 'react-redux';

import './Profile.css';

function Profile() {
  // убрать any
  const { username, email, gender, height, weight, objective } = useSelector((state: any) => state.user)
  
  return (
    <section className="profile">
      <form className="profile__form">
        <label className="profile__form-label" htmlFor="name">
          Имя
          <input
            className="profile__input" 
            type="text" 
            name="name" 
            id="name"
            placeholder="Введите имя"
            value={username}
            disabled />
        </label>
        <label className="profile__form-label" htmlFor="email">
          Email
          <input
            className="profile__input"  
            type="email" 
            name="email" 
            id="email"
            placeholder="example@mail.com"
            value={email}
            disabled />
        </label>
        <label className="profile__form-label" htmlFor="gender">
          Пол
          <select
            className="profile__select" 
            name="gender" 
            id="gender"
            value={gender}
            disabled>   
              <option value="M">Мужской</option>
              <option value="F">Женский</option>
          </select>
        </label>
        <label className="profile__form-label" htmlFor="height">
          Рост
          <input
            className="profile__input"  
            type="number" 
            name="height" 
            id="height"
            placeholder="Ваш рост"
            value={height}
            disabled />
        </label>
        <label className="profile__form-label" htmlFor="weight">
          Вес
          <input
            className="profile__input"  
            type="number" 
            name="weight" 
            id="weight"
            placeholder="Ваш вес"
            value={weight}
            disabled />
        </label>
        <label className="profile__form-label" htmlFor="objective">
          Цель
          <select
            className="profile__select" 
            name="objective" 
            id="objective"
            value={objective}
            disabled>   
              <option value="loss" selected>Похудение</option>
              <option value="safe">Сохранение веса</option>
              <option value="gain">Набор веса</option>
          </select>
        </label>
        <button type="button" className="profile__edit-btn hover-link">Редактировать</button>
      </form>
    </section>
  );
}

export default Profile;