import { applyMiddleware, compose, createStore, Store } from 'redux';
import * as promiseMiddleware from 'redux-promise';
import reducer from './reducer';

const useDevTools =
    process.env.NODE_ENV !== 'production' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = useDevTools
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const middlewareEnhancer = applyMiddleware(promiseMiddleware);

/**
 * ストアを生成する
 * @param preLoadedState
 * @returns {Store}
 */
export const createReduxStore = (preLoadedState: any): Store => {
    // compose関数：複数の関数を結合する
    return createStore(
        reducer,
        preLoadedState,
        composeEnhancers(middlewareEnhancer)
    );
};
