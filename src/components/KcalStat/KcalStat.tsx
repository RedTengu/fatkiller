import './KcalStat.css';

type KcalStatProps = {
  date: string;
  name: string;
  kcal: number;
};

function KcalStat({date, name, kcal}: KcalStatProps) {
  return (
    <li className="stats-list__elem">
      <p className="stats-list__elem-date">{date}</p>
      <p className="stats-list__elem-value medium">
        <span className="stats-list__elem-name regular">{name}: </span>
          {kcal} 
        <span className="stats-list__elem-measure regular"> ккал</span>
      </p>
      <div className="stats-list__elem-btns">
        <button className="stats-list__btn stats-list__elem-edit hover-link" type="button" aria-label="Редактировать запись" />
        <button className="stats-list__btn stats-list__elem-delete hover-link" type="button" aria-label="Удалить запись" />
      </div>
    </li>
  );
}

export default KcalStat;