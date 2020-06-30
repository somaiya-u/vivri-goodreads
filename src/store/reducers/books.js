import {books} from './constants';


const initialState = {
  allIds: books.map(book=>book.id),
  byIds: books.reduce((booksDict,book)=>{ booksDict[book['id']] = book; return booksDict; },{})
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
