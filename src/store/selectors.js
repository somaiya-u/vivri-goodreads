export const getBooksState = store => store.books;

export const getBooksList = store =>
getBooksState(store) ? getBooksState(store).allIds : [];

export const getBookById = (store, id) =>
  getBooksState(store) ? { ...getBooksState(store).byIds[id], id } : {};

export const getBooks = store =>
  getBooksList(store).map(id => getBookById(store, id));
