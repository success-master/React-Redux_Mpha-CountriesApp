import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

function configureStore(state = { region: 'Africa', country: '', result: [] }) {
    return createStore(rootReducer, state);
}

export default configureStore;