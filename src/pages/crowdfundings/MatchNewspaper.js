import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images,Drawer} from '../../components';
import '../../styles/CrowdfundingPage.css';
import Progress from './Progress';

export default class MatchNewspaper extends Component {



    render() {

        return (
            <div className="flexColumn paper-page">
                <div className="imgDiv">
                    <img src="/static/images/H5SahrePage06.png" alt=""/>
                </div>
                <div className="flexRow paperDiv">
                    <span className="paperDiv-txt">
                        NCBP国家杯棋牌职业大师赛棋牌职业大师赛
                    </span>
                    <div className="separated"/>
                    <div className="flexRow newsPaperDiv">
                        <img src="/static/images/android-load.png" alt=""/>
                        <span>及时赛报</span>
                    </div>
                </div>
                <div className="flexRow price-time-page">
                    <span>入场资格：¥2000</span>
                    <span className="date-txt">2017.09.11—2017.09.12</span>
                </div>
                <span className="location-txt">地点：北京香格里拉酒店</span>
                <div className="slide-div">
                   <Progress/>
                </div>

                <div className="flexRow numbers-page">
                    <div className="flexColumn numbers">
                        <span>5人</span>
                        <span>选手人数</span>
                    </div>
                    <div className="flexColumn numbers">
                        <span>5人</span>
                        <span>选手人数</span>
                    </div>
                    <div className="flexColumn numbers">
                        <span>5人</span>
                        <span>选手人数</span>
                    </div>
                </div>
            </div>

        )
    }
}
