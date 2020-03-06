import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {ReactComponent as Icon} from '../../assets/icons/filter.svg';
import useFiltredWords from './hooks/useFiltredWords';

import {FETCH_WORDS_FILTRED_START} from '../../redux/actions/app.actions';

interface StyledProps {
  isActivated: boolean;
}

const Filter = () => {
  const dispatch = useDispatch();

  const [selectedFilter, setSelectedFilter] = useState('isFavorite');
  const [isActivated, setIsActivated] = useState(false);

  useFiltredWords(selectedFilter);

  const handleSelectedFilter = (selected: string) => {
    setSelectedFilter(selected);
    dispatch({type: FETCH_WORDS_FILTRED_START});
  };

  return (
    <Container isActivated={isActivated}>
      <div
        id="dropdown"
        onPointerEnter={() => setIsActivated(true)}
        onPointerLeave={() => setIsActivated(false)}
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
      >
        <span id="filter-title">{selectedFilter}</span>
        <Icon id="filter" />
        <div id="dropdown-content" onPointerEnter={() => setIsActivated(true)}>
          <ul>
            <li>
              <button type="button" onClick={() => handleSelectedFilter('isVerb')}>
                Verbo
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleSelectedFilter('isParticle')}>
                Particula
              </button>
            </li>
            <li>
              <button type="button" onClick={() => handleSelectedFilter('isAdjective')}>
                Adjetivo
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: #fafafb;
  cursor: pointer;

  #filter-title {
    color: rgb(120, 120, 120);
  }

  #filter {
    fill: #fafafb;
  }

  #dropdown {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
    padding-bottom: 5px;
  }

  #dropdown-content {
    display: ${({isActivated}: StyledProps) => (isActivated ? 'block' : 'none')};
    bottom: -120px;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }

  li {
    padding: 5px 0px;

    button {
      border: none;
      background: none;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }

    button:hover {
      color: rgb(120, 120, 120);
    }
  }
`;

export default Filter;
