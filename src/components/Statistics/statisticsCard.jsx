import css from './statisticsCard.module.css';

export const CardStat = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};
