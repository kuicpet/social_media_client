import React from 'react';

export default function Friends({user}) {
  return (
    <li className="sidebarFriend">
      <img src={user.profilePicture} alt="" className="friendImg" />
      <span className="friendName">{user.username}</span>
    </li>
  );
}
