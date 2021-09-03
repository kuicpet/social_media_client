import { Redeem } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components/macro';

export default function Rightbar() {
  return (
    <Wrapper>
      <RightbarContainer>
        <BirthdayContainer>
          <Redeem className="birthdayImg" htmlColor="red" />
          <span className="birthdayText">
            <b>Morenike</b> and <b>4 other friends</b> have a birthday today
          </span>
        </BirthdayContainer>
        <img src='/assets/kingsley_photo.jpg' alt='' className='rightBarAd' />
        <h4 className='rightBarTitle'>Online friends</h4>
        <ul className='friendList'>
            <li className='friend'>
                <div className='friendImgContainer'>
                    <img src='' alt='' />
                </div>
            </li>
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
