import { connect } from 'react-redux';
import { TodoList } from '../components/todoList';
import { IAppState } from '../reducer';

export default connect(
    (state: IAppState) => ({
        todos: state.todos
    }),
    {
        //
    }
)(TodoList);
