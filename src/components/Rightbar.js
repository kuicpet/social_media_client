import { Redeem } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components/macro';
import { Users } from '../dummyData';
import Online from './Online';

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <BirthdayContainer>
          <Redeem className="birthdayImg" htmlColor="red" />
          <span className="birthdayText">
            <b>Morenike</b> and <b>4 other friends</b> have a birthday today
          </span>
        </BirthdayContainer>
        <img src="/assets/kingsley_photo.jpg" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online friends</h4>
        <ul className="friendList">
          {Users.map((user) => (
            <Online key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Akure</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Warri</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="/assets/kingsley_photo.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/kingsley_photo.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/kingsley_photo.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/kingsley_photo.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/kingsley_photo.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="/assets/kingsley_photo.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <Wrapper>
      <RightbarContainer>
        {profile ? (<ProfileRightBar/>) : (<HomeRightBar/>)}
      </RightbarContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 3.5;
`;
const RightbarContainer = styled.div`
  padding: 20px 20px 0 0;
  .rightBarAd {
    width: 100%;
    border-radius: 10px;
    margin: 30px 0;
  }
  .rightBarTitle {
    margin-bottom: 20px;
  }
  .friendList {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .friend {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    .friendUsername {
      font-weight: bold;
    }
  }
  .friendImgContainer {
    margin-right: 10px;
    position: relative;
  }
  .friendProfileImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  .online {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: limegreen;
    position: absolute;
    top: -2px;
    right: 0;
    border: 2px solid white;
  }
  .rightbarInfo {
    margin-bottom: 30px;
  }
  .rightbarInfoItem {
    margin-bottom: 10px;
  }
  .rightbarInfoKey {
    font-weight: 500;
    margin-right: 10px;
    color: #555;
  }
  .rightbarInfoValue {
    font-weight: 300;
  }
  .rightbarFollowings {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .rightbarFollowing {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .rightbarTitle {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .rightbarFollowingImg {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const BirthdayContainer = styled.div`
  display: flex;
  align-items: center;
  .birthdayImg {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  .birthdayText {
    font-weight: 300;
    font-size: 15px;
  }
`;
