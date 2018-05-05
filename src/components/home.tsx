import * as React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../reducer';
import TodoList from './todoList';

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

export default connect(
    (state: IAppState) => ({
        //
    }),
    {
        //
    }
)(Home);
