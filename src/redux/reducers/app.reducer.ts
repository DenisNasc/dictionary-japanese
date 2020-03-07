import {
  HANDLE_APP_STATE,
  FETCH_WORDS_FILTRED_START,
  FETCH_WORDS_FILTRED_SUCCESS,
  FETCH_WORDS_FILTRED_FAIL
} from '../actions/app.actions';

export interface Word {
  _id?: string;
  __v?: number;
  sentence: string;
  translate: string;
  meanings: {word: string; meaning: string}[];
  isFavorite: boolean;
  section: string;
  upVotes: number;
  downVotes: number;
}

export interface AppState {
  fetchWordsFiltredStart: boolean;
  fetchWordsFiltredSuccess: boolean;
  fetchWordsFiltredFail: boolean;
  query: string;
  sectionFilter: string;
  errorMessage: string;
  wordsFetched: Word[];
}

export interface AppAction {
  type: string;
  payload: {key: string; value?: string; errorMessage?: string; wordsFetched?: Word[]};
}

const initialState = {
  fetchWordsFiltredStart: false,
  fetchWordsFiltredSuccess: false,
  fetchWordsFiltredFail: false,
  query: '',
  sectionFilter: '',
  errorMessage: '',
  wordsFetched: []
};

const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case HANDLE_APP_STATE: {
      return {...state, [action.payload.key]: action.payload.value};
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
        wordsFetched: action.payload.wordsFetched
      };
    }

    case FETCH_WORDS_FILTRED_FAIL: {
      return {
        ...state,
        fetchWordsFiltredStart: false,
        fetchWordsFiltredSuccess: false,
        fetchWordsFiltredFail: true,
        errorMessage: action.payload.errorMessage
      };
    }

    default: {
      return {...state};
    }
  }
};

export default appReducer;
