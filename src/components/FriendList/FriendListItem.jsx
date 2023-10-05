import css from '../FriendList/friendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={clsx(css.circle, {
          [css.green]: isOnline === true,
          [css.red]: isOnline === false,
        })}
      ></span>
      <img className={css.avatar} scr={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
