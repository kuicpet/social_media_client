import React from 'react';
import styled from 'styled-components/macro';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';

export default function Navbar() {
  return (
    <Wrapper>
      <LeftContainer>
        <span className="logo">Logo</span>
      </LeftContainer>
      <CenterContainer>
        <div className="searchBar">
          <Search className='searchIcon' />
          <input
            className="searchInput"
            type="text"
            placeholder="Search for friends,post or video..."
          />
        </div>
      </CenterContainer>
      <RightContainer>
        <div className="links">
          <span className="link">Homepage</span>
          <span className="link">Timeline</span>
        </div>
        <div className="icons">
          <div className="iconItem">
            <Person />
            <span className="iconBadge">1</span>
          </div>
          <div className="iconItem">
            <Chat />
            <span className="iconBadge">2</span>
          </div>
          <div className="iconItem">
            <Notifications />
            <span className="iconBadge">1</span>
          </div>
        </div>
        <img src="/assets/kingsley_photo.jpg" alt="" className="profileImg" />
      </RightContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  background-color: #1877f2;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
`;
const LeftContainer = styled.div`
  flex: 3;
  .logo {
    font-size: 24px;
    margin-left: 20px;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
`;
const CenterContainer = styled.div`
  flex: 5;
  .searchBar {
    width: 100%;
    height: 30px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
  }
  .searchIcon {
      font-size: 20px;
      margin-left: 5px;
  }
  .searchInput {
      border: none;
      width: 70%;
      & :focus {
          outline: none;
      }
  }
`;
const RightContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  .link {
      margin-right: 10px;
      font-size: 14px;
      cursor: pointer;
  }
  .icons {
      display: flex;
  }
  .iconItem {
      margin-right: 15px;
      cursor: pointer;
      position: relative;
      .iconBadge {
          width: 15px;
          height: 15px;
          background-color: red;
          border-radius: 50%;
          color: white;
          position: absolute;
          top: -5px;
          right: -5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
      }
  }
  .profileImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
`;
