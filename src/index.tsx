import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import App from './App';
import registerServiceWorker from './lib/registerServiceWorker';
import { createReduxStore } from './store';

const preLoadedState = {};
const store: Store = createReduxStore(preLoadedState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
