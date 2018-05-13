import { connect } from 'react-redux';
import { removeTodoAction } from '../../actions/todos';
import { RemoveTodoForm } from '../../components/forms/removeTodoForm';
import { IAppState } from '../../reducer';

export default connect(
    (state: IAppState) => ({
        //
    }),
    {
        removeTodoAction
    }
)(RemoveTodoForm);
