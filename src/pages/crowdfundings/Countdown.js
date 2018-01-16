import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images,Drawer} from '../../components';
import '../../styles/CrowdfundingPage.css';
import CrowdCountDown from '../../components/CrowdCountDown';

export default class Countdown extends Component {

    render() {
        return (
            <nav className="countdown-page">
                <CrowdCountDown date='1516204800'/>
            </nav>

        )
    }
}
