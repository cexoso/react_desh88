import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images,Drawer} from '../../components';
import '../../styles/Progress.css';

export default class Progress extends Component {

    render() {
        return (
            <div className="progress-page">
                <div className="total-width"/>
                <div className="progress-width"/>
                <div className="progress-size">
                    <span>12%</span>
                </div>
            </div>

        )
    }
}
