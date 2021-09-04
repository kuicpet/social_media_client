import { Redeem } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components/macro';
import { Users } from '../dummyData';
import Online from './Online';

export default function Rightbar({profile}) {
  return (
    <Wrapper>
      <RightbarContainer>
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
