import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import history from './utils/history'
import App from './App'

import store from './store'

import './semantic/dist/semantic.min.css'

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
    </Provider>, document.getElementById('root')
);

serviceWorker.unregister();
