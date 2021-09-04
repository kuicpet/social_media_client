import { Favorite, MoreVert, ThumbUp } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Users } from '../dummyData';

export default function Posts({ post }) {
  const [like, setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIsLiked(!isliked)
  };
  return (
    <Wrapper>
      <PostContainer>
        <PostTop>
          <div className="topLeft">
            <img
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="topRight">
            <MoreVert />
          </div>
        </PostTop>
        <PostCenter>
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </PostCenter>
        <PostBottom>
          <div className="bottomLeft">
            <div className="likeContainer">
              <ThumbUp className="likeIcon" onClick={likeHandler} />
            </div>
            <div className="heartContainer">
              <Favorite className="heartIcon" onClick={likeHandler} />
            </div>
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="bottomRight">
            <span className="postCommentText">{post.comment} comments</span>
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
