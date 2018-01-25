import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images, Drawer} from '../../components';
import '../../styles/CrowdfundingPage.css';
import Countdown from './Countdown';
import MatchNewspaper from './MatchNewspaper';
import CategoryList from './CategoryList';
import {getCrowdDetail, setLang} from '../../service/RaceDao';
import moment from 'moment';

export default class CrowdfundingPage extends Component {
    state = {
        crowd: {}
    };

    componentDidMount() {
        const {id,lang} = this.props.match.params;
        setLang(lang);
        const body = {id: id};
        getCrowdDetail(body, data => {
            console.log("crowd:",data)
            this.setState({
                crowd: data
            })
        }, err => {

        })
    }

    render() {
        const {crowd} = this.state;
        const {expire_date,categories} = crowd;
        let date = moment.utc(expire_date).valueOf();
        date = `${date/1000}`;//转为string
        return (
            <div className="Page">
                <Countdown
                    expire_date={date}/>
                <MatchNewspaper
                    crowd={crowd}/>
                <CategoryList
                    categories={categories}
                    history={this.props.history}/>
            </div>

        )
    }
}
