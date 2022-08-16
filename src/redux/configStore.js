import { combineReducers, createStore } from 'redux'

import { BTReactFormReducer } from './reducer/BTReactFormReducer'

const rootReducers = combineReducers({
    BTReactFormReducer,
});


export const store = createStore(rootReducers)