import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore() {
  const initialState = {};
  const middleware = [thunk];

  const reducer = combineReducers(rootReducer);

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middleware)
      //, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return { store };
}
