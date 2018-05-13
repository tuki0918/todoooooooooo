import { connect } from 'react-redux';
import { addTodoAction } from '../../actions/todos';
import { CreateTodoForm } from '../../components/forms/createTodoForm';
import { IAppState } from '../../reducer';

export default connect(
    (state: IAppState) => ({
        //
    }),
    {
        addTodoAction
    }
)(CreateTodoForm);
