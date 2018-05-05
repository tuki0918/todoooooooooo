import { combineReducers } from 'redux';
import { todos, TTodosState } from './reducers/todos';

export interface IAppState {
    todos: TTodosState
}

export default combineReducers<IAppState>({
    todos
});
