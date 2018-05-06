import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../reducer';
import { ITodo, TTodosState } from '../reducers/todos';
import ClearTodoForm from './forms/clearTodoForm';
import CreateTodoForm from './forms/createTodoForm';
import RemoveTodoForm from './forms/removeTodoForm';
import SaveTodoForm from './forms/saveTodoForm';
import TodoItem from './todoItem';

interface IProps {
    todos: TTodosState
}

interface IState {
    //
}

export class TodoList extends React.Component<IProps, IState> {

    private items = (): JSX.Element[] => {
        const { todos } = this.props;
        return todos.map((todo: ITodo, idx: number) =>
            <TodoItem key={idx} {...todo} id={idx} />
        );
    };

    public render() {

        return (
            <div>
                <h1>TodoList</h1>
                <CreateTodoForm />
                <RemoveTodoForm />
                <ClearTodoForm />
                <SaveTodoForm />
                <ul>
                    {this.items()}
                </ul>
            </div>
        );
    }

}

export default connect(
    (state: IAppState) => ({
        todos: state.todos
    }),
    {
        //
    }
)(TodoList);
