import React from 'react';
import styled from 'styled-components/macro';
import Post from './Posts';
import Share from './Share';
import { Posts } from '../dummyData';

export default function Feed() {
  return (
    <Wrapper>
      <FeedContainer>
        <Share />
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </FeedContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 5.5;
  padding: 20px;
`;
const FeedContainer = styled.div``;
