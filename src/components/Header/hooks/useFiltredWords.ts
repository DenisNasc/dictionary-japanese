import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

import {Store} from '../../../redux/store/index.store';
import {AppState} from '../../../redux/reducers/app.reducer';

import {FETCH_WORDS_SUCCESS, FETCH_WORDS_FAIL} from '../../../redux/actions/app.actions';

const useFiltredWords = (selectedFilter: string) => {
  const {fetchWordsStart} = useSelector<Store, AppState>(state => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!fetchWordsStart) {
      return;
    }

    const fetchWord = async () => {
      const {data: wordsFiltred} = await axios.get(
        `http://localhost:5050/words?${selectedFilter}=true`
      );

      console.log(wordsFiltred);
      dispatch({type: FETCH_WORDS_SUCCESS, payload: {wordsFetched: wordsFiltred}});
    };

    try {
      fetchWord();
    } catch (err) {
      dispatch({type: FETCH_WORDS_FAIL, payload: {errorMessage: err.message}});
    }
  }, [fetchWordsStart]);
};

export default useFiltredWords;
