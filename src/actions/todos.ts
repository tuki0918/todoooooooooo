import { ActionFunctions, createAction } from 'redux-actions';
import { ITodo, ITodoId } from '../reducers/todos';

// --------------------------------------------------
// アクション 定数
// --------------------------------------------------

enum actionTypes {
    ADD_TODO = 'ADD_TODO',
    UPDATE_TODO = 'UPDATE_TODO',
}

// --------------------------------------------------
// アクション 型
// --------------------------------------------------

export type TActionFunction = ActionFunctions<any>;

// --------------------------------------------------
// アクション
// --------------------------------------------------

export const addTodoAction: TActionFunction = createAction<ITodo, {}>(
    actionTypes.ADD_TODO,
    (todo: ITodo): ITodo => todo
);

export const updateTodoAction: TActionFunction = createAction<ITodo, ITodoId>(
    actionTypes.UPDATE_TODO,
    (todo: ITodo, id: number): ITodo => todo,
    (todo: ITodo, id: number): ITodoId => ({ id })
);
