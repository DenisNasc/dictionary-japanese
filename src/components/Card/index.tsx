import React, {useState} from 'react';
import styled from 'styled-components';
import Feedback from './Feedback';
import CardHeader from './CardHeader';

const Card = () => {
  useState();

  return (
    <Container>
      <CardHeader />

      <div id="description">
        Aqui ficará a descrição sobre a expressão em questão Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corporis dolor aliquid quo exercitationem corrupti ullam quisquam. Non,
        odit incidunt sed doloribus vero architecto praesentium voluptatum voluptate dicta culpa
        minima officiis!
      </div>

      <div id="meanings">
        <ul id="meanings-list">
          <li>
            Significado 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deleniti
            iure repudiandae illum doloribus deserunt quisquam laboriosam, sed, provident dolorem a?
            Soluta vitae impedit consequuntur, sequi repudiandae voluptate facere nulla.
          </li>
          <li>
            Significado 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deleniti
            iure repudiandae illum doloribus deserunt quisquam laboriosam, sed, provident dolorem a?
            Soluta vitae impedit consequuntur, sequi repudiandae voluptate facere nulla.
          </li>
          <li>
            Significado 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deleniti
            iure repudiandae illum doloribus deserunt quisquam laboriosam, sed, provident dolorem a?
            Soluta vitae impedit consequuntur, sequi repudiandae voluptate facere nulla.
          </li>
        </ul>
      </div>
      <Feedback />
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
