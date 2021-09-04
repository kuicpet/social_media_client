import React from 'react';
import styled from 'styled-components/macro';
import {
  Bookmark,
  Chat,
  Group,
  Help,
  InsertInvitation,
  PlayCircleFilled,
  RssFeed,
  School,
  WorkOutline,
} from '@material-ui/icons';
import { Users } from '../dummyData';
import Friends from './Friends';

export default function Sidebar() {
  return (
    <Wrapper>
      <SidebarContainer>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcons" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcons" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilled className="sidebarIcons" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcons" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcons" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <Help className="sidebarIcons" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcons" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <InsertInvitation className="sidebarIcons" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcons" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <Button>Show More</Button>
        <hr />
        <ul className="sidebarFriendList">
          {Users.map((user) => (
            <Friends key={user.id} user={user}/>
          ))}
          
        </ul>
      </SidebarContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 3;
  height: calc(100vh - 50px);
  overflow-y: scroll;
  position: sticky;
  top: 50px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
  }
`;

const SidebarContainer = styled.div`
  padding: 20px;
  .sidebarList {
    list-style: none;
    margin: 0;
    padding: 0;
    .sidebarListItem {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .sidebarIcons {
        margin-right: 15px;
      }
    }
  }
  hr {
    margin: 20px 0;
  }
  .sidebarFriendList {
    margin: 0;
    padding: 0;
    list-style: none;
    .sidebarFriend {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      .friendImg {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
      }
    }
  }
`;

const Button = styled.button`
  width: 150px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
`;
