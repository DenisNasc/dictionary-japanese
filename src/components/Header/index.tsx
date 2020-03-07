import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {ReactComponent as Search} from '../../assets/icons/search.svg';
import Filter from './Filter';

import useFiltredWords from './hooks/useFiltredWords';
import {HANDLE_APP_STATE, FETCH_WORDS_FILTRED_START} from '../../redux/actions/app.actions';

import {Store} from '../../redux/store/index.store';
import {AppState} from '../../redux/reducers/app.reducer';

const Header = () => {
  const dispatch = useDispatch();
  const {query: word, sectionFilter} = useSelector<Store, AppState>(state => state.app);

  useFiltredWords(sectionFilter, word);

  const handleQuery = (query: string) => {
    dispatch({type: HANDLE_APP_STATE, payload: {key: 'query', value: query}});
  };

  return (
    <Container>
      <div id="search-bar">
        <input
          type="text"
          id="query"
          value={word}
          onChange={e => handleQuery(e.target.value)}
          placeholder="はじめまして . . ."
        />
        <Search onClick={() => dispatch({type: FETCH_WORDS_FILTRED_START})} id="icon" />
      </div>

      <Filter />
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: #141735;
  padding: 0px 400px;

  #search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;

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
  }
`;

export default Header;
