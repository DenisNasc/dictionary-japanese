import {
  HANDLE_QUERY,
  FETCH_WORDS_FILTRED_START,
  FETCH_WORDS_FILTRED_SUCCESS,
  FETCH_WORDS_FILTRED_FAIL,
  FETCH_WORDS_QUERY_START,
  FETCH_WORDS_QUERY_SUCCESS,
  FETCH_WORDS_QUERY_FAIL
} from '../actions/app.actions';

export interface Word {
  _id?: string;
  __v?: number;
  sentence: string;
  translate: string;
  meanings: {word: string; meaning: string}[];
  isFavorite: boolean;
  upVotes: number;
  downVotes: number;
}

export interface AppState {
  fetchWordsQueryStart: boolean;
  fetchWordsQuerySuccess: boolean;
  fetchWordsQueryFail: boolean;
  fetchWordsFiltredStart: boolean;
  fetchWordsFiltredSuccess: boolean;
  fetchWordsFiltredFail: boolean;
  query: string;
  errorMessage: string;
  wordsFetched: Word[];
}

export interface AppAction {
  type: string;
  payload?: {query?: string; errorMessage?: string; wordsFetched?: Word[]};
}

const initialState = {
  fetchWordsQueryStart: false,
  fetchWordsQuerySuccess: false,
  fetchWordsQueryFail: false,
  fetchWordsFiltredStart: false,
  fetchWordsFiltredSuccess: false,
  fetchWordsFiltredFail: false,
  query: '',
  errorMessage: '',
  wordsFetched: []
};

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case HANDLE_QUERY: {
      return {...state, query: action.payload?.query};
    }

    case FETCH_WORDS_QUERY_START: {
      return {
        ...state,
        fetchWordsQueryStart: true,
        fetchWordsQuerySuccess: false,
        fetchWordsQueryFail: false
      };
    }

    case FETCH_WORDS_QUERY_SUCCESS: {
      return {
        ...state,
        fetchWordsQueryStart: false,
        fetchWordsQuerySuccess: true,
        fetchWordsQueryFail: false,
        wordsFetched: action.payload?.wordsFetched
      };
    }

    case FETCH_WORDS_QUERY_FAIL: {
      return {
        ...state,
        fetchWordsQueryStart: false,
        fetchWordsQuerySuccess: false,
        fetchWordsQueryFail: true,
        errorMessage: action.payload?.errorMessage
      };
    }

    case FETCH_WORDS_FILTRED_START: {
      return {
        ...state,
        fetchWordsFiltredStart: true,
        fetchWordsFiltredSuccess: false,
        fetchWordsFiltredFail: false
      };
    }

    case FETCH_WORDS_FILTRED_SUCCESS: {
      return {
        ...state,
        fetchWordsFiltredStart: false,
        fetchWordsFiltredSuccess: true,
        fetchWordsFiltredFail: false,
        wordsFetched: action.payload?.wordsFetched
      };
    }

    case FETCH_WORDS_FILTRED_FAIL: {
      return {
        ...state,
        fetchWordsFiltredStart: false,
        fetchWordsFiltredSuccess: false,
        fetchWordsFiltredFail: true,
        errorMessage: action.payload?.errorMessage
      };
    }

    default: {
      return {...state};
    }
  }
};

export default appReducer;
