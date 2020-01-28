import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store/index'

ReactDOM.render(
    <Provider store={store}>
    <div>Hello World</div>
    </Provider>,
    document.getElementById('root')
)
