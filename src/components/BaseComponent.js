/**
 * Created by lorne on 2017/12/18
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import 'antd-mobile/dist/antd-mobile.css';

class BaseComponent extends Component {

    superFunc = (data) => {
        alert(`在子类中调用了父类的函数，${data}`)
    };

    _render = () => {
        return null;
    };

    render() {
        return (
            <div style={[styles.container, this.props.style]}>

                {this._render()}
            </div>
        )
    }

}

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column'

    }
}