import { connect } from 'react-redux';
import { clearAction } from '../../actions/todos';
import { ClearTodoForm } from '../../components/forms/clearTodoForm';
import { IAppState } from '../../reducer';

export default connect(
    (state: IAppState) => ({
        //
    }),
    {
        clearAction
    }
)(ClearTodoForm);
