import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images,Drawer} from '../../components';
import '../../styles/CrowdfundingPage.css';
import Countdown from './Countdown';
import MatchNewspaper from './MatchNewspaper';
import CategoryList from './CategoryList';

export default class CrowdfundingPage extends Component {


    render() {
        return (
            <div className="Page">
                <Countdown/>
                <MatchNewspaper/>
                <CategoryList history = {this.props.history}/>
            </div>

        )
    }
}
