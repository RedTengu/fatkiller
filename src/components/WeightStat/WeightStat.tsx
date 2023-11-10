import './WeightStat.css';

type WeightStatProps = {
  date: string;
  weight: number;
};

function WeightStat({date, weight}: WeightStatProps) {
  return (
    <li className="stats-list__elem">
      <p className="stats-list__elem-date">{date}</p>
      <p className="stats-list__elem-value medium">
        {weight} <span className="stats-list__elem-measure regular">кг</span>
      </p>
      <div className="stats-list__elem-btns">
        <button className="stats-list__btn stats-list__elem-edit hover-link" type="button" aria-label="Редактировать запись" />
        <button className="stats-list__btn stats-list__elem-delete hover-link" type="button" aria-label="Удалить запись" />
      </div>
    </li>
  );
}

export default WeightStat;