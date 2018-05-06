import * as React from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from '../actions/todos';
import { IAppState } from '../reducer';
import { ITodo, TodoStatusEnum } from "../reducers/todos";

interface IProps {
    // TODO: types
    addTodoAction: any
}

interface IState {
    text: string;
}

export class Form extends React.Component<IProps, IState> {

    constructor(props : IProps) {
        super(props);
        this.state = {
            text: ''
        };
    }

    private onInputTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({
            text: e.target.value
        });
    };

    private submit = (): void => {

        const { text } = this.state;
        if (!text.length) {
            return;
        }

        const todo: ITodo = {
            status: TodoStatusEnum.pending,
            text: text
        };
        this.props.addTodoAction(todo);
        this.setState({
            text: ''
        });
    };

    public render() {

        const { text } = this.state;

        return (
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={this.onInputTextChange}
                />
                <button onClick={this.submit}>
                    Add
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
        addTodoAction
    }
)(Form);
