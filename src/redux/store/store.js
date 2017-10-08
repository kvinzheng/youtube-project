import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import * as Api from '../utils/Api';
import rootReducer from '../reducers';

// store creation
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware.withExtraArgument({ Api }),
  ),
);

export default store;
