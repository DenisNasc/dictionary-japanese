import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import {ReactComponent as Icon} from '../../assets/icons/filter.svg';
import useFiltredWords from './hooks/useFiltredWords';

import {HANDLE_APP_STATE} from '../../redux/actions/app.actions';
import {Store} from '../../redux/store/index.store';
import {AppState} from '../../redux/reducers/app.reducer';

interface StyledProps {
  isActivated: boolean;
}

const Filter = () => {
  const dispatch = useDispatch();

  const {sectionFilter} = useSelector<Store, AppState>(state => state.app);

  const [isActivated, setIsActivated] = useState(false);

  const handleSelectedFilter = (selected: string) => {
    dispatch({type: HANDLE_APP_STATE, payload: {key: 'sectionFilter', value: selected}});
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
        <span id="filter-title">{!sectionFilter ? 'No Filters' : `Section ${sectionFilter}`}</span>

        <Icon id="filter" onClick={() => handleSelectedFilter('')} />

        <div id="dropdown-content" onPointerEnter={() => setIsActivated(true)}>
          <ul>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(section => (
              <li key={section}>
                <button type="button" onClick={() => handleSelectedFilter(section)}>
                  {`Section ${section}`}
                </button>
              </li>
            ))}
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

  #filter:hover {
    fill: rgb(120, 120, 120);
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
    top: 29px;
    position: absolute;
    background-color: #232850;
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
      color: #fafafb;
    }

    button:hover {
      color: rgb(120, 120, 120);
    }
  }
`;

export default Filter;
