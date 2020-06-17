import reducer from './reducer';
import { createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducer,applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer,  composeEnhancers(
        applyMiddleware(thunk)
      ));

// const store = createStore(reducer, 
//     applyMiddleware(thunk)
//   );
export default store;