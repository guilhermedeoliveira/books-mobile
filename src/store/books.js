/**
 * action types
 */
export const Types = {
  GET_BOOKS: 'books/GET_BOOKS',
  GET_BOOKS_SUCCESS: 'books/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'books/GET_BOOKS_FAILURE',

  GET_PAGINATE_BOOKS: 'books/GET_PAGINATE_BOOKS',
  GET_PAGINATE_BOOKS_SUCCESS: 'books/GET_PAGINATE_BOOKS_SUCCESS',
  GET_PAGINATE_BOOKS_FAILURE: 'books/GET_PAGINATE_BOOKS_FAILURE'
};

/**
 * initial state
 */
const initialState = {
  loading: false,
  data: [],
  error: ''
};

/**
 * reducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_BOOKS:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case Types.GET_BOOKS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: ''
      };
    case Types.GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case Types.GET_PAGINATE_BOOKS:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case Types.GET_PAGINATE_BOOKS_SUCCESS:
      return {
        loading: false,
        data: [
          ...state.data.filter(i => i.id),
          ...action.payload
        ],
        error: ''
      };
    case Types.GET_PAGINATE_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

/**
 * action creators
 */
export const fetchBooks = books => ({
  type: Types.GET_BOOKS,
  payload: books
});

export const paginateBooks = (books, startIndex) => ({
  type: Types.GET_PAGINATE_BOOKS,
  payload: { books, startIndex }
});
