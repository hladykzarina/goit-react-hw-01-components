import { UserStats } from './UserStats';
import css from './profile.module.css';
export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={avatar} alt={username} width="150" className={css.avatar} />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <UserStats stats={stats} />
    </div>
  );
};
