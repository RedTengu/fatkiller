import './DiaryCard.css';

function DiaryCard() {
  return (
    <a className="diary-link" href="#">
      <li className="diary-card card">
        <h2 className="diary-card__title bold">Дневник веса</h2>
      </li>
    </a>
  );
}

export default DiaryCard;