import React from 'react';
import styled from 'styled-components/macro';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Feed from '../../components/Feed';
import Rightbar from '../../components/Rightbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
