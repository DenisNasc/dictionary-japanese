import React, {useState} from 'react';
import styled from 'styled-components';
import {ReactComponent as Search} from '../assets/icons/search.svg';

const Header = () => {
  const [query, setQuery] = useState('');
  return (
    <Container>
      <input
        type="text"
        id="query"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="はじめまして . . ."
      />
      <Search id="icon" />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background: #141735;

  #query {
    padding: 5px 20px;
    width: 350px;
    border: 0;
    border-bottom: 1px solid grey;
    border-radius: 5px;
    background: #232850;
    color: #fafafb;
  }

  #icon {
    width: 30px;
    height: 30px;
    padding: 3px;
    fill: #fafafb;
    background: none;
    border: 1px solid #fafafb;
    border-radius: 50%;
    margin-left: 10px;
  }

  #icon:hover {
    cursor: pointer;
    background: rgba(240, 240, 240, 0.1);
  }
`;

export default Header;
