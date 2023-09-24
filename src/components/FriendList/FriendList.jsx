import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(element => (
        <FriendListItem key={element.id} friend={element} />
      ))}
    </ul>
  );
}

/* <ul class="friend-list">
  <!-- Довільна кіл-сть FriendListItem -->
</ul> */
