import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'


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
                {layout}
            </div>

        );
    }
}

export default withRouter(props => <App {...props}/>);



