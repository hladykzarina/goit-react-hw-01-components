import user from './Profile/user.json';
import Profile from './Profile/Profile.jsx';

import data from '../components/Statistics/data.json';
import Statistics from '../components/Statistics/Statistics';

import friends from '../components/FriendList/friends.json';
import FriendList from '../components/FriendList/FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
