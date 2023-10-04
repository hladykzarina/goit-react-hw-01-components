import { FriendListItem } from './FriendListItem';
import css from '../FriendList/friendsList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul class={css.FriendList}>
      {friends.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};
