import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { TopNav } from './components';


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
        const { search } = this.props.location;
        return <div>
            {search.includes('accessToken') ? null : <TopNav />}
            {this.props.children}
        </div>
    }
}

export default withRouter(App);



