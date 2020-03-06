import React, {useState} from 'react';
import styled from 'styled-components';
import Feedback from './Feedback';
import CardHeader from './CardHeader';

import {Word} from '../../redux/reducers/app.reducer';

const Card = ({
  word,
  isVerb,
  isAdjective,
  isParticle,
  meaning,
  examples,
  isFavorite,
  upVotes,
  downVotes
}: Word) => {
  useState();

  return (
    <Container>
      <CardHeader word={word} isVerb={isVerb} isAdjective={isAdjective} isParticle={isParticle} />

      <div id="description">{meaning}</div>

      <div id="meanings">
        <ul id="meanings-list">
          {examples.map(e => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
      <Feedback isFavorite={isFavorite} upVotes={upVotes} downVotes={downVotes} />
    </Container>
  );
};

const Container = styled.div`
  background: #232850;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-left: 400px;
  margin-right: 580px;
  border: 1px solid #000;
  border-radius: 20px;
  font-size: 14px;
  text-align: justify;
  min-width: 400px;

  @media screen and (max-width: 768px) {
    width: 400px;
  }

  #description {
    margin-bottom: 20px;
  }

  #meanings-list {
    margin-bottom: 20px;
    li {
      margin: 10px 0px;
    }
  }
`;

export default Card;
