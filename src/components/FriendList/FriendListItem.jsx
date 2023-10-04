import css from '../FriendList/friendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li class={css.item}>
      <span
        className={clsx(css.circle, {
          [css.green]: isOnline === true,
          [css.red]: isOnline === false,
        })}
      ></span>
      <img class={css.avatar} scr={avatar} alt={name} width="48" />
      <p class={css.name}>{name}</p>
    </li>
  );
};
