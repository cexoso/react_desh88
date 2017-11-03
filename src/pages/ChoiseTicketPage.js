import React, {Component} from 'react';
import {setLang, getLang, getChoiseTicketInfo} from '../service/RaceDao';
import I18n from '../service/I18n';
import  '../styles/ChoiseTicketPage.css';
import {default_img} from '../components/constant';
import {isEmptyObject, weiXinShare, message_desc, strNotNull, ticketStatusConvert} from '../service/utils';
import Time from 'react-time-format';

export default class ChoiseTicketPage extends Component {
    state = {
        choiseTicket: {},
        showButton1: "raceBotton raceBottonShow",
        showButton2: "raceBotton",
        selectPrice: 0,
        selectTicket: ""

    }

    componentDidMount() {
        const {id, lang} = this.props.match.params;
        setLang(lang);
        this.selectedId = -1;
        this.ticket = "";

        const body = {choiseTicket_id: id};

        getChoiseTicketInfo(body, data => {
            console.log('ChoiseTicketInfo', data)
            this.setState({
                choiseTicket: data
            })
            document.title = data.race.name;

            //微信二次分享
            // const url = {url: "http://www.deshpro.com:3000/race/91/zh"};
            // const url = {url: "http://h5-react.deshpro.com:3000/race/91/zh"};
            const {name, logo, location, begin_date, end_date} =data.race;
            const message = {
                title: name,
                desc: message_desc(location, begin_date, end_date),//分享描述
                link: window.location.href, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: isEmptyObject(logo) ? default_img : logo, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            }
            const url = {url: window.location.href};
            weiXinShare(url, message);

        }, err => {

        });
    };

    bottomBar = () => {
        let wConfirm = window.confirm;
        window.confirm = function (message) {
            let iframe = document.createElement("IFRAME");
            iframe.style.display = "none";
            iframe.setAttribute("src", 'data:text/plain,');
            document.documentElement.appendChild(iframe);
            let alertFrame = window.frames[0];
            let result = alertFrame.window.confirm(message);
            iframe.parentNode.removeChild(iframe);
            return result;
        };

        return (<div className="viewBottom">
            <span className="txtMoney">{I18n.t('price')}: </span>
            <span className="txtMoneyNum"> ¥{this.state.selectPrice}</span>
            <div style={{flex: 1}}/>
            <div className={this._btnOkStyle()}
                 onClick={() => {
                     let message = I18n.t('app_load');
                     let result = wConfirm(message);
                     if (result) {
                         this.props.history.push("/loadApp")
                     }
                 }}>
                <span className="txtBtnOk">{this._txtTicketStatus()}</span>
            </div>

        </div>)
    }
        ;
    _btnOkStyle = () => {
        let num = this._ticketNum(this.state.selectTicket.ticket_info);
        return this.state.selectTicket.status === "selling" && num > 0 ?
            "viewBtnOk" : "btnDisable"
    };

    _txtTicketStatus = () => {
        const {ticket} = this.state.selectTicket;
        if (isEmptyObject(ticket))
            return I18n.t('selectOk');
        else
            return ticketStatusConvert(ticket.status)

    };


    render() {
        const {race, tickets} = this.state.choiseTicket;
        if (isEmptyObject(race)) {
            return <div></div>;
        }
        return (
            <div className="choiseTicket">
                <div className="choiseTicket-name">
                    <span>{race.name}</span>
                </div>
                <div className="choiseTicket-race">
                    <div className="race-span"></div>
                    <span
                        style={{flex: 1, marginLeft: 17, color: '#444444', fontSize: 15}}>{I18n.t('selectRace')}</span>
                    <div className="raceButtons">
                        <div className={this.state.showButton1} onClick={() => {
                            this.setState({
                                showButton1: "raceBotton raceBottonShow",
                                showButton2: "raceBotton"
                            })
                        }}><span>{I18n.t('mainRace')}</span></div>
                        <div style={{marginLeft: 20, display: 'none'}} className={this.state.showButton2}
                             onClick={() => {
                                 this.setState({
                                     showButton2: "raceBotton raceBottonShow",
                                     showButton1: "raceBotton"
                                 })
                             }}><span>{I18n.t('sideRace')}</span></div>
                    </div>
                </div>
                <div style={{height: 10}}></div>
                {tickets.map((item, index) => <ChoiseTicketList
                    {...this.props}
                    key={index}
                    item={item}
                    race={race}
                    tickets={this.setTicket}
                    selectId={this.selectedId}
                    params={this.props.match.params}
                    selectIndex={this.selectItem}
                    _ticketNum={this._ticketNum}/>)}


                <div style={{height: 150}}></div>
                {this.bottomBar()}
            </div>
        );
    };

    _ticketNum = (ticket_info) => {
        if (!isEmptyObject(ticket_info)) {
            const {e_ticket_number, e_ticket_sold_number, entity_ticket_number, entity_ticket_sold_number} = ticket_info;
            return e_ticket_number + entity_ticket_number - e_ticket_sold_number - entity_ticket_sold_number;
        }

    };


    selectItem = (id) => {
        this.selectedId = id;
        this.setState({
            selectedIndex: id

        })
    };
    setTicket = (item) => {
        this.setState({
            selectPrice: item.price,
            selectTicket: item,
            ticket: item
        })
    }


}

class ChoiseTicketList extends Component {

    render() {
        const {item, race, params, tickets, selectId, selectIndex, _ticketNum} = this.props;

        return (
            <div className={selectId === item.id ? 'choiseTicket-contentBorder' : 'choiseTicket-content'}
                 onClick={() => {
                     selectIndex(item.id)
                     tickets(item)

                 }}>
                <img style={{marginLeft: 17, width: 80, height: 104, marginTop: 16}}
                     src={strNotNull(item.logo) ? item.logo : default_img} alt=""/>
                <div className="content-right">
                    <div className="right-title"><span>{item.title}</span></div>
                    <div className="right-tl">
            <span className="right-time"><Time value={race.begin_date} format="YYYY.MM.DD"/>-<Time
                value={race.end_date} format="YYYY.MM.DD"/></span>
                        <span className="right-location">{I18n.t('location')} {race.location}</span>
                    </div>
                    <div className="right-si">
                        <span className="right-sale">¥{item.price}</span>
                        <div className="right-remain">{I18n.t('surplus')}
                            <span>{_ticketNum(item.ticket_info)}</span>
                            {I18n.t('spread')}</div>
                        <div style={{flex: 1}}/>

                        <div className="right-info" onClick={() => {
                            this.props.history.push(`/races/${race.race_id}/tickets/${item.id}/${params.lang}`)
                        }}>
                            <span>{I18n.t('lookDetail')}</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
