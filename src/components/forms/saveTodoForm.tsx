import * as localforage from 'localforage';
import * as React from 'react';
import { connect } from 'react-redux';
import { STORE_LOCALFORAGE_KEY } from '../../constants';
import { IAppState } from '../../reducer';
import { TTodosState } from '../../reducers/todos';

interface IProps {
    todos: TTodosState
}

interface IState {
    //
}

export class SaveTodoForm extends React.Component<IProps, IState> {

    private submit = (e: React.FormEvent<any>): void => {
        e.preventDefault();

        const todos = this.props.todos;

        localforage.setItem(STORE_LOCALFORAGE_KEY, { todos }).then((value: any) => {
            // Do other things once the value has been saved.
        }).catch((err: any) => {
            // This code runs if there were any errors
            console.log(err);
        });
    };

    public render() {

        return (
            <div>
                <button onClick={this.submit}>
                    Save
                </button>
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
)(SaveTodoForm);
