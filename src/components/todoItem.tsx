import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../reducer';
import { ITodo, TodoStatusEnum } from '../reducers/todos';

interface IProps extends ITodo {
    id: number
}

interface IState {
    //
}

export class TodoItem extends React.Component<IProps, IState> {

    public render() {

        const { id, text, status } = this.props;
        const isCompleted = (status === TodoStatusEnum.completed);

        return (
            <li>
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
        //
    }
)(TodoItem);
