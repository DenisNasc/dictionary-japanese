import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import Card from './Card';
import {Store} from '../redux/store/index.store';
import {AppState} from '../redux/reducers/app.reducer';

const Main = () => {
  const {wordsFetched} = useSelector<Store, AppState>(state => state.app);

  return (
    <Container>
      {wordsFetched.map(word => (
        <Card
          key={word.word}
          word={word.word}
          isVerb={word.isVerb}
          isAdjective={word.isAdjective}
          isParticle={word.isParticle}
          meaning={word.meaning}
          examples={word.examples}
          isFavorite={word.isFavorite}
          upVotes={word.upVotes}
          downVotes={word.downVotes}
        />
      ))}
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 80px);
  background: #141735;
  color: #fafafb;
`;

export default Main;
