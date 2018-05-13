import * as React from 'react';
import TodoList from '../container/todoList';

interface IProps {
    //
}

interface IState {
    //
}

export class Home extends React.Component<IProps, IState> {

    public render() {
        return (
            <div>
                <TodoList />
            </div>
        );
    }

}
