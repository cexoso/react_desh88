import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {TopNav} from './components';


// global.console = {
//     info: () => {
//     },
//     log: () => {
//     },
//     warn: () => {
//     },
//     error: () => {
//     },
// };


class App extends Component {
    render() {
        const layout = React.Children.map(this.props.children,
            (child) => child
        );
        return (<div>
                <TopNav/>
                {layout}
            </div>

        );
    }
}

export default withRouter(props => <App {...props}/>);



