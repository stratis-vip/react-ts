import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux'
import reducer from '../reducers/index'

const store = createStore(reducer, composeWithDevTools(
    // other store enhancers if any
));

export default store