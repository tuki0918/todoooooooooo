import * as React from 'react';
import { connect } from 'react-redux';
import { updateTodoAction } from '../actions/todos';
import { IAppState } from '../reducer';
import { ITodo, ITodoId, TodoStatusEnum } from '../reducers/todos';

interface IProps extends ITodoId, ITodo {
    // TODO: types
    updateTodoAction: any
}

interface IState {
    //
}

export class TodoItem extends React.Component<IProps, IState> {

    private onUpdateTodo = (): void => {
        const { id, text, status } = this.props;
        const todo: ITodo = {
            status: (!status) ? TodoStatusEnum.completed : TodoStatusEnum.pending,
            text
        };

        this.props.updateTodoAction(todo, id);
    };

    public render() {

        const { id, text, status } = this.props;
        const isCompleted = (status === TodoStatusEnum.completed);

        return (
            <li onClick={this.onUpdateTodo}>
                [{isCompleted ? 'x' : '_'}]
                #{id}: {text}
            </li>
        );
    }

}

export default connect(
    (state: IAppState) => ({
        //
    }),
    {
        updateTodoAction
    }
)(TodoItem);