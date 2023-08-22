import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  greeting: ''
};

const SET_GREETING = 'SET_GREETING';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GREETING:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export const setGreeting = (greeting) => ({
  type: SET_GREETING,
  payload: greeting
});

export const fetchRandomGreeting = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/random_greeting');
      const data = await response.json();
      dispatch(setGreeting(data.greeting));
    } catch (error) {
      console.error('Error fetching random greeting:', error);
    }
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
