import React from 'react';
import styled from 'styled-components';
import Feed from '../components/Feed';
import Navbar from '../components/Navbar';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';

export default function Profile() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <ProfileRight>
          <div className="profileTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/kingsley_photo.jpg"
                alt=""
              />
              <img
                className="profileImg"
                src="/assets/kingsley_photo.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Kingsley Umujeyan</h4>
              <span className="profileInfoDesc">My description</span>
            </div>
          </div>
          <div className="profileBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </ProfileRight>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;
const ProfileRight = styled.div`
  flex: 9;
  .profileCover {
    height: 320px;
    position: relative;
    .profileCoverImg {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
    .profileImg {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      top: 150px;
      border: 3px solid white;
    }
  }
  .profileInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .profileInfoName {
        font-size: 24px;
    }
    .profileInfoDesc {
        font-weight: 300;
    }
  }
  .profileBottom {
    display: flex;
  }
`;
