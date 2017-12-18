/**
 * Created by lorne on 2017/12/18
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import {setLang, setToken} from '../service/RaceDao';
import {getURLParamKey, postMsg, strNotNull} from '../service/utils';

export default class BaseComponent extends Component {
    constructor(props) {
        super(props);
        this._render = this._render.bind(this);
        const {lang} = this.props.match.params;
        let accessToken = getURLParamKey('accessToken', this.props.location.search);
        this.body = getURLParamKey('body', this.props.location.search);


        setToken(accessToken);
        setLang(lang);
    }

    _render() {
        return null
    }

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
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0

    }
}