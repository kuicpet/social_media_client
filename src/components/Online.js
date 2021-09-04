import React from 'react'


export default function Online({user}) {
    return (
        <li className="friend">
            <div className="friendImgContainer">
              <img
                src={user.profilePicture}
                alt=""
                className="friendProfileImg"
              />
              <span className="online"></span>
            </div>
            <span className="friendUsername">{user.username}</span>
          </li>
    )
}

