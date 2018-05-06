import * as React from 'react';
import { connect } from 'react-redux';
import { removeTodoAction } from '../../actions/todos';
import { IAppState } from '../../reducer';

interface IProps {
    // TODO: types
    removeTodoAction: any
}

interface IState {
    //
}

export class RemoveTodoForm extends React.Component<IProps, IState> {

    private submit = (e: React.FormEvent<any>): void => {
        e.preventDefault();
        this.props.removeTodoAction();
    };

    public render() {

        return (
            <div>
                <button onClick={this.submit}>
                    completed task to trash
                </button>
            </div>
        );
    }

}

export default connect(
    (state: IAppState) => ({
        //
    }),
    {
        removeTodoAction
    }
)(RemoveTodoForm);
