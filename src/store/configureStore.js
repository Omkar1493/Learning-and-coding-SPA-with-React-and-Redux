import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())//  RISInvariant  shouldn't changge state
    /*Redux Thunk middleware allows you to write action creators 
    that return a function instead of an action.
     The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
    The inner function receives the store methods dispatch and getState as parameters.*/
  );

}
