import React, {useState} from 'react';
import styled from 'styled-components';

interface StyledProps {
  isVerb: boolean;
  isParticle: boolean;
  isAdjective: boolean;
}

interface Props {
  word: string;
  isVerb: boolean;
  isAdjective: boolean;
  isParticle: boolean;
}

const CardHeader = ({word, isVerb, isAdjective, isParticle}: Props) => {
  return (
    <Container isVerb={isVerb} isParticle={isParticle} isAdjective={isAdjective}>
      <h3 id="expression">{word}</h3>

      <ul>
        <li id="verb">Verbo</li>
        <li id="part">Partícula</li>
        <li id="adjt">Adjetivo</li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  li {
    margin-left: 30px;
    background: purple;
    padding: 5px 15px;
    border-radius: 50px;
  }

  #verb {
    display: ${({isVerb}: StyledProps) => (isVerb ? 'block' : 'none')};
    background: green;
  }

  #part {
    display: ${({isParticle}: StyledProps) => (isParticle ? 'block' : 'none')};
    background: blue;
  }

  #adjt {
    display: ${({isAdjective}: StyledProps) => (isAdjective ? 'block' : 'none')};
    background: orange;
  }
`;

export default CardHeader;
