/**
 * action types
 */
export const Types = {
  GET_BOOKS: 'books/GET_BOOKS',
  GET_BOOKS_SUCCESS: 'books/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'books/GET_BOOKS_FAILURE'
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
    default:
      return state;
  }
};

/**
 * action creators
 */
export const getBooks = () => ({
  type: Types.GET_BOOKS
});
