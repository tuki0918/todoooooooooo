import * as React from 'react';
import ClearTodoForm from '../container/forms/clearTodoForm';
import CreateTodoForm from '../container/forms/createTodoForm';
import RemoveTodoForm from '../container/forms/removeTodoForm';
import SaveTodoForm from '../container/forms/saveTodoForm';
import TodoItem from '../container/todoItem';
import { ITodo, TTodosState } from '../reducers/todos';

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
