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
      {wordsFetched.map(card => (
        <Card
          key={card.sentence}
          sentence={card.sentence}
          meanings={card.meanings}
          translate={card.translate}
          section={card.section}
          isFavorite={card.isFavorite}
          upVotes={card.upVotes}
          downVotes={card.downVotes}
        />
      ))}
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 80px);
  background: #141735;
  color: #fafafb;
`;

export default Main;
