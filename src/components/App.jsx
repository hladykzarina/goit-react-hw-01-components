import { Profile } from './Profile/profile.jsx';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './transactions/transactionHistory';
import MyCounter from 'components/counter/counter';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transaction from 'data/transaction.json';

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
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
      <MyCounter initialValue1={0} initialValue2={0} />
    </div>
  );
};
