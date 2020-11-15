import { createStore, combineReducers, compose, applyMiddleware} from 'redux';
import filtersReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;

window.store = store;
