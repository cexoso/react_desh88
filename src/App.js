import React, {Component} from 'react';


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

export default App;



