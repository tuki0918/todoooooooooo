import { connect } from 'react-redux';
import { updateTodoAction } from '../actions/todos';
import { TodoItem } from '../components/todoItem';
import { IAppState } from '../reducer';

export default connect(
    (state: IAppState) => ({
        //
    }),
    {
        updateTodoAction
    }
)(TodoItem);
