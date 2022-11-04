import { createMemoryHistory  } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const history = createMemoryHistory();

const routeMiddleware = routerMiddleware(history);

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  const store = createStore(reducers(history), initialState , bindMiddleware([routeMiddleware, thunk]));
  return store;
}

export default configureStore;
export { history };