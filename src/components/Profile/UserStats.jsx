import css from './UserStats.module.css';

export const UserStats = ({ stats }) => {
  return (
    <ul className={css.listStat}>
      <li className={css.statItem}>
        <span className={css.qnt}>Followers</span>
        <span className={css.qnt}>
          <strong>{stats.followers}</strong>
        </span>
      </li>
      <li className={css.statItem}>
        <span className={css.qnt}>Views</span>
        <span className={css.qnt}>
          <strong>{stats.views}</strong>
        </span>
      </li>
      <li className={css.statItem}>
        <span className={css.qnt}>Likes</span>
        <span className={css.qnt}>
          <strong>{stats.likes}</strong>
        </span>
      </li>
    </ul>
  );
};
