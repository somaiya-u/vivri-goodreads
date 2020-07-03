import {LOAD_BOOKS,CLEAR_BOOKS, SHOW_SPINNER, HIDE_SPINNER} from '../actions/books';


const initialState = {
  queryString: "",
  resultsStart: 0,
  resultsEnd: 0,
  totalResults: 0,
  showSpinner: false,
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        showSpinner: true
      };
    }
    case HIDE_SPINNER: {
      return {
        ...state,
        showSpinner: false
      };
    }
    case LOAD_BOOKS: {
      const { payload } = action;
      return {
        showSpinner: state.showSpinner,
        queryString: payload.queryString,
        resultsStart: payload.resultsStart,
        resultsEnd: payload.resultsEnd,
        totalResults: payload.totalResults,
        allIds: payload.books.map(book=>(book.id)),
        byIds: payload.books.reduce((booksDict,book)=>{ booksDict[book['id']] = book; return booksDict; },{})
      };
    }
    case CLEAR_BOOKS: {
      return {
        ...initialState
      };
    }
    default:
      return state;
  }
}
