import * as React from 'react';
import { connect } from 'react-redux';
import Home from './components/home';
import { IAppState } from './reducer';

interface IProps {
    //
}

interface IState {
    //
}

class App extends React.Component<IProps, IState> {

    public render() {
        return (
            <div className="App">
                <Home />
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
)(App);