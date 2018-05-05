import { ActionFunctions, createAction } from 'redux-actions';
import { ITodo } from '../reducers/todos';

// --------------------------------------------------
// アクション 定数
// --------------------------------------------------

enum actionTypes {
    ADD_TODO = 'ADD_TODO'
}

// --------------------------------------------------
// アクション
// --------------------------------------------------

export const addTodoAction: ActionFunctions<any> = createAction<ITodo>(actionTypes.ADD_TODO);
