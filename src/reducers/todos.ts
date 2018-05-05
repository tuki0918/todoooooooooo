import { Action, handleActions } from 'redux-actions';
import {
    addTodoAction
} from '../actions/todos';

export enum TodoStatusEnum {
    pending = 'pending',
    completed = 'completed'
}

export interface ITodo {
    status: TodoStatusEnum;
    text: string;
}

export type TTodosState = ITodo[];
export const initialState: TTodosState = [];

export const todos = handleActions<any, any>({

    [addTodoAction.toString()]: (state: TTodosState, action: Action<ITodo>) => ([
        ...state,
        action.payload
    ])

}, initialState);
