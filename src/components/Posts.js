import { Favorite, MoreVert, ThumbUp } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

export default function Posts() {
  return (
    <Wrapper>
      <PostContainer>
        <PostTop>
          <div className="topLeft">
            <img
              src="/assets/kingsley_photo.jpg"
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">Kingsley Umujeyan</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="topRight">
            <MoreVert />
          </div>
        </PostTop>
        <PostCenter>
          <span className="postText">Hey! its my first post</span>
          <img src="/assets/kingsley_photo.jpg" alt="" className="postImg" />
        </PostCenter>
        <PostBottom>
          <div className="bottomLeft">
            <div className="likeContainer">
              <ThumbUp className="likeIcon" />
            </div>
            <div className="heartContainer">
              <Favorite className="heartIcon" />
            </div>
            <span className="postLikeCounter">32 people liked it</span>
          </div>
          <div className="bottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </PostBottom>
      </PostContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
`;
const PostContainer = styled.div`
  padding: 10px;
`;
const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .topLeft {
    display: flex;
    align-items: center;
    .postProfileImg {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
    }
    .postUsername {
      font-size: 15px;
      font-weight: bold;
      margin: 0 10px;
    }
    .postDate {
      font-size: 12px;
    }
  }
`;
const PostCenter = styled.div`
  margin: 20px 0;
  .postImg {
    width: 100%;
    margin-top: 20px;
    max-height: 500px;
    object-fit: contain;
  }
`;
const PostBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .bottomLeft {
    display: flex;
    align-items: center;
    .likeContainer {
      background-color: #1877f2;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      margin-right: 5px;
      cursor: pointer;
      .likeIcon {
        width: 20px;
        height: 20px;
        padding: 2px;
        color: white;
      }
    }
    .heartContainer {
      background-color: tomato;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      margin-right: 5px;
      cursor: pointer;
      .heartIcon {
        color: white;
        width: 20px;
        height: 20px;
        padding: 2px;
      }
    }
    .postLikeCounter {
        font-size: 15px;
    }
  }
  .postCommentText {
      border-bottom: 1px dashed gray;
      cursor: pointer;
  }
`;
