import css from './FriendListItem.module.css';

export function FriendListItem({ friend }) {
  return (
    <li className={css.item}>
      <span
        className={friend.isOnline ? css.statusOnline : css.statusOffline}
      ></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
}

//  {
//     "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812
//   }
