import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

import {Store} from '../../../redux/store/index.store';
import {AppState} from '../../../redux/reducers/app.reducer';

import {
  FETCH_WORDS_FILTRED_SUCCESS,
  FETCH_WORDS_FILTRED_FAIL
} from '../../../redux/actions/app.actions';

const useFiltredWords = (selectedFilter: string) => {
  const {fetchWordsFiltredStart} = useSelector<Store, AppState>(state => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetchWordsFiltredStart) {
      return;
    }

    const fetchWord = async () => {
      const {data: wordsFiltred} = await axios.get(
        `http://localhost:5050/words?${selectedFilter}=true`
      );

      console.log(wordsFiltred);
      dispatch({type: FETCH_WORDS_FILTRED_SUCCESS, payload: {wordsFetched: wordsFiltred}});
    };

    try {
      fetchWord();
    } catch (err) {
      dispatch({type: FETCH_WORDS_FILTRED_FAIL, payload: {errorMessage: err.message}});
    }
  }, [fetchWordsFiltredStart]);
};

export default useFiltredWords;
