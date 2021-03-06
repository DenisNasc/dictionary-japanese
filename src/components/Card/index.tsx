import React from 'react';
import styled from 'styled-components';
import Feedback from './Feedback';
import CardHeader from './CardHeader';

import {Word} from '../../redux/reducers/app.reducer';

const Card = ({sentence, meanings, translate, isFavorite, upVotes, downVotes}: Word) => {
  return (
    <Container>
      <CardHeader sentence={sentence} />

      <div id="translate">{translate}</div>

      <ul id="meanings-list">
        {meanings.map(e => (
          <li key={e.word}>{`${e.word} = ${e.meaning}`}</li>
        ))}
      </ul>

      <Feedback isFavorite={isFavorite} upVotes={upVotes} downVotes={downVotes} />
    </Container>
  );
};

const Container = styled.div`
  background: #232850;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-bottom: 20px;
  margin-left: 400px;
  margin-right: 580px;
  border: 1px solid #ebebee;
  border-radius: 20px;
  font-size: 14px;
  text-align: justify;
  min-width: 500px;

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  #translate {
    padding-top: 20px;
    border-top: 1px solid white;
  }

  #meanings-list {
    margin-top: 20px;
    li {
      margin: 10px 0px;
    }
  }
`;

export default Card;
