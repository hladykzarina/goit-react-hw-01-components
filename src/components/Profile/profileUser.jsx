import css from './profileUser.module.css';
export const profileUser = ({ stats }) => {
  return (
    <ul className={css.profileList}>
      <li className={css.profileItem}>
        <span className={css.qnt}>Followers</span>
        <span className={css.qnt}>
          <strong>{stats.followers}</strong>
        </span>
      </li>
      <li className={css.profileItem}>
        <span className={css.qnt}>Views</span>
        <span className={css.qnt}>
          <strong>{stats.views}</strong>
        </span>
      </li>
      <li className={css.profileItem}>
        <span className={css.qnt}>Likes</span>
        <span className={css.qnt}>
          <strong>{stats.likes}</strong>
        </span>
      </li>
    </ul>
  );
};
