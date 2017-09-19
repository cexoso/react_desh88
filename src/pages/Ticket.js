import React, {Component} from 'react';
import {getTicketInfo,setLang} from '../service/RaceDao';
import {weiXinShare,isEmptyObject} from '../service/utils';
import {default_img} from '../components/constant';
import MarkDown from '../components/MarkDown';
import Footer from '../components/Footer';
import I18n from '../service/I18n';

export default class Ticket extends Component {
    state = {
        data: {}
    };

    componentDidMount(){
        const {id,ticketsId, lang} = this.props.match.params;
        setLang(lang);
        const body = {ticketId: ticketsId,
                     raceId:id};

        getTicketInfo(body, data => {
            console.log('TicketInfo', data)
            this.setState({
                data: data
            });
            const {name,logo,description} = data.race;
            document.title = name;

            //微信二次分享
            // const url = {url: "http://www.deshpro.com:3000/activities/1/zh"};
            // const url = {url: "http://h5-react.deshpro.com:3000/activities/1/zh"};
            const message = {
                title: name,
                desc: description,//分享描述
                link: window.location.href, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: isEmptyObject(logo)?default_img:logo, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            }
            const url = {url: window.location.href};
            console.log("message:",message);
            weiXinShare(url,message);
        }, err => {

        });

    }

    render(){
        if(isEmptyObject(this.state.data.race)) {
            return <div></div>;
        }
        const {name,logo,ticket_price} = this.state.data.race;
        const {description} = this.state.data.tickets;
        return(

            <div className="ticket">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <span class="title">{name}</span>
                <div className="ticket-prize">
                    <span>{I18n.t('prize_pool')}</span>
                    <span>{ticket_price}</span>
                </div>
                <div className="line"></div>
                <MarkDown description={description}/>
                <Footer/>
            </div>
        );
    }
}