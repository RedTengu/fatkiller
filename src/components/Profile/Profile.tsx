import './Profile.css';

function Profile() {
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
            defaultValue="Мурат"
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
            defaultValue="mb@gmail.com"
            disabled />
        </label>
        <label className="profile__form-label" htmlFor="gender">
          Пол
          <select
            className="profile__select" 
            name="gender" 
            id="gender"
            disabled>   
              <option>Мужской</option>
              <option>Женский</option>
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
            defaultValue="183"
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
            defaultValue="80"
            disabled />
        </label>
        <label className="profile__form-label" htmlFor="objective">
          Цель
          <select
            className="profile__select" 
            name="objective" 
            id="objective"
            disabled>   
              <option selected>Похудение</option>
              <option>Сохранение веса</option>
              <option>Набор веса</option>
          </select>
        </label>
        <button type="button" className="profile__edit-btn hover-link">Редактировать</button>
      </form>
    </section>
  );
}

export default Profile;