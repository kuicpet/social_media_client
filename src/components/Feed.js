import React from 'react';
import styled from 'styled-components/macro';
import Posts from './Posts';
import Share from './Share';

export default function Feed() {
  return (
    <Wrapper>
      <FeedContainer>
        <Share />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </FeedContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 5.5;
  padding: 20px;
`;
const FeedContainer = styled.div``;
