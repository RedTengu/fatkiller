import './DiaryCard.css';

type DiaryCardProps = {
  title: string;
  style: React.CSSProperties;
};

function DiaryCard({ title, style }: DiaryCardProps) {
  return (
    <a className="diary-link" href="#">
      <li className="diary-card card" style={style}>
        <h2 className="diary-card__title bold">{title}</h2>
      </li>
    </a>
  );
}

export default DiaryCard;