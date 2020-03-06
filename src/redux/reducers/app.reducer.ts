import {
  HANDLE_QUERY,
  FETCH_WORDS_START,
  FETCH_WORDS_SUCCESS,
  FETCH_WORDS_FAIL
} from '../actions/app.actions';

export type word = {
  _id: string;
  __v: number;
  word: string;
  isVerb: boolean;
  isAdjective: boolean;
  isParticle: boolean;
  isFavorite: boolean;
  meaning: string;
  examples: string[];
  upVotes: number;
  downVotes: number;
};

export interface AppState {
  fetchWordsStart: boolean;
  fetchWordsSuccess: boolean;
  fetchWordsFail: boolean;
  query: string;
  errorMessage: string;
  wordsFetched: word[];
}

export interface AppAction {
  type: string;
  payload?: {query?: string; errorMessage?: string; wordsFetched?: word[]};
}

const initialState = {
  fetchWordsStart: false,
  fetchWordsSuccess: false,
  fetchWordsFail: false,
  query: '',
  errorMessage: '',
  wordsFetched: []
};

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case HANDLE_QUERY: {
      return {...state, query: action.payload?.query};
    }

    case FETCH_WORDS_START: {
      return {...state, fetchWordsStart: true, fetchWordsSuccess: false, fetchWordsFail: false};
    }

    case FETCH_WORDS_SUCCESS: {
      return {
        ...state,
        fetchWordsStart: false,
        fetchWordsSuccess: true,
        fetchWordsFail: false,
        wordsFetched: action.payload?.wordsFetched
      };
    }

    case FETCH_WORDS_FAIL: {
      return {
        ...state,
        fetchWordsStart: false,
        fetchWordsSuccess: false,
        fetchWordsFail: true,
        errorMessage: action.payload?.errorMessage
      };
    }

    default: {
      return {...state};
    }
  }
};

export default appReducer;
