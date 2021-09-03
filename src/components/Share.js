import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

export default function Share() {
  return (
    <Wrapper>
      <ShareContainer>
        <ShareTop>
          <img
            src="/assets/kingsley_photo.jpg"
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            placeholder='What"s on your mind'
            className="shareInput"
          />
        </ShareTop>
        <hr />
        <ShareBottom>
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor='blue' className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor='green' className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor='goldenrod' className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <Button>Share</Button>
        </ShareBottom>
      </ShareContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`;
const ShareContainer = styled.div`
  padding: 20px;
  hr {
    margin: 20px;
  }
`;
const ShareTop = styled.div`
  display: flex;
  align-items: center;
  .shareProfileImg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }
  .shareInput {
    border: none;
    width: 80%;
    & :focus {
      outline: none;
    }
  }
`;
const ShareBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .shareOptions {
      display: flex;
      margin-left: 20px;
      .shareOption {
          display: flex;
          align-items: center;
          margin-right: 15px;
          .shareIcon {
              font: 18px;
               margin-right: 5px;
          }
          .shareOptionText {
              font-size: 14px;
              font-weight: bold;
          }
      }
  }
`;

const Button = styled.button`
    border: none;
    padding: 7px;
    border-radius: 5px;
    font-weight: 500;
    margin-right: 20px;
    cursor: pointer;
    background-color: green;
    color: white;
`
