import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images, Drawer} from '../../components';
import '../../styles/CrowdfundingPage.css';
import Progress from './Progress';
import {isEmptyObject} from '../../service/utils';
import moment from 'moment';

export default class MatchNewspaper extends Component {

    race_time = (race) => {
        const {begin_date, end_date} = race;
        return moment(begin_date).format('YYYY.MM.DD') + '-' + moment(end_date).format('YYYY.MM.DD')
    };
    render() {
        const {
            master_image, categories, cf_cond, cf_offer_money, cf_total_money,
            created_at, expire_date, player_count, publish_date, race
        } = this.props.crowd;
        let percent = cf_offer_money / cf_total_money;
        return (
            <div className="flexColumn paper-page">
                <div className="imgDiv">
                    <img src={master_image} alt=""/>
                </div>
                <div className="flexRow paperDiv">
                    <span className="paperDiv-txt">
                        {isEmptyObject(race) ? '' : race.name}
                    </span>
                    <div className="separated"/>
                    <div className="flexRow newsPaperDiv">
                        <img src="/static/images/android-load.png" alt=""/>
                        <span>及时赛报</span>
                    </div>
                </div>
                <div className="flexRow price-time-page">
                    <span>入场资格：¥{cf_cond}</span>
                    <span className="date-txt">{isEmptyObject(race) ? '' : this.race_time(race)}</span>
                </div>
                <span className="location-txt">地点：{isEmptyObject(race) ? '' : race.location}</span>
                <div className="slide-div">
                    <Progress
                        percent={percent}/>
                </div>

                <div className="flexRow numbers-page">
                    <div className="flexColumn numbers">
                        <span>{player_count}人</span>
                        <span>选手人数</span>
                    </div>
                    <div className="flexColumn numbers">
                        <span>{cf_total_money}万</span>
                        <span>赞助总额</span>
                    </div>
                    <div className="flexColumn numbers">
                        <span>{cf_offer_money}万</span>
                        <span>认购金额</span>
                    </div>
                </div>
            </div>

        )
    }
}
