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
  isFilterSelected: string;
}

const Filter = () => {
  const dispatch = useDispatch();

  const {sectionFilter} = useSelector<Store, AppState>(state => state.app);

  const [isActivated, setIsActivated] = useState(false);

  const handleSelectedFilter = (selected: string) => {
    dispatch({type: HANDLE_APP_STATE, payload: {key: 'sectionFilter', value: selected}});
  };

  return (
    <Container isActivated={isActivated} isFilterSelected={sectionFilter}>
      <div id="dropdown">
        <Icon
          id="filter"
          onClick={() => {
            setIsActivated(false);
            handleSelectedFilter('');
          }}
        />
        <span
          id="filter-title"
          role="button"
          tabIndex={0}
          onKeyDown={() => {}}
          onClick={() => setIsActivated(state => !state)}
        >
          {!sectionFilter ? 'Select' : `Section ${sectionFilter}`}
        </span>

        <div id="dropdown-content">
          <ul>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(section => (
              <li key={section}>
                <div
                  id="filter-option"
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => {}}
                  onClick={() => {
                    setIsActivated(false);
                    handleSelectedFilter(section);
                  }}
                >
                  {`Section ${section}`}
                </div>
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
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  #filter-title {
    color: #fafafb;
    font-weight: bolder;
    margin-left: 20px;
  }

  #filter {
    fill: #fafafb;
    opacity: ${({isFilterSelected}: StyledProps) => (isFilterSelected ? '100%' : '50%')};
  }

  #filter:hover {
    opacity: 50%;
  }

  #dropdown {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #5d27b6;
    border-radius: 5px;
    width: 150px;
    padding: 10px 10px;
  }

  #dropdown-content {
    display: ${({isActivated}: StyledProps) => (isActivated ? 'block' : 'none')};
    opacity: ${({isActivated}: StyledProps) => (isActivated ? '100%' : '0%')};
    transition: 3s;
    top: 40px;
    border-radius: 5px;
    position: absolute;
    background-color: #232850;
    min-width: 90%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    #filter-option {
      font-family: 'Roboto', sans-serif;
      border-bottom: 1px solid gray;
      padding: 15px 0;
      padding-left: 10px;
      text-align: left;
      background: none;
      cursor: pointer;
      width: 100%;
      height: 100%;
      color: #fafafb;
    }

    #filter-option:hover {
      background: #5d27b6;
    }
  }
`;

export default Filter;
