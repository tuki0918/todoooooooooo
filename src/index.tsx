import * as localforage from 'localforage';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { App } from './App';
import { STORE_LOCALFORAGE_KEY } from './constants';
import registerServiceWorker from './lib/registerServiceWorker';
import { createReduxStore } from './store';

localforage.getItem(STORE_LOCALFORAGE_KEY).then((value: any) => {
    const preLoadedState = value || {};
    const store: Store = createReduxStore(preLoadedState);

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root') as HTMLElement
    );

    registerServiceWorker();
}).catch((err: any) => {
    console.log(err);
});

// debug
// localforage.clear().then(() => {
//     // Run this code once the database has been entirely deleted.
//     console.log('Database is now empty.');
// }).catch((err: any) => {
//     // This code runs if there were any errors
//     console.log(err);
// });
