import React, {Component} from 'react';
import {getTicketInfo,setLang} from '../service/RaceDao';
import {weiXinShare,isEmptyObject} from '../service/utils';
import {default_img} from '../components/constant';
import MarkDown from '../components/MarkDown';
import Footer from '../components/Footer';
import I18n from '../service/I18n';
import '../styles/Ticket.css';

export default class Ticket extends Component {
    state = {
        data: {}
    };

    componentDidMount(){
        const {id,ticketId, lang} = this.props.match.params;
        setLang(lang);
        const body = {ticketId: ticketId,
                     raceId:id};

        getTicketInfo(body, data => {
            console.log('TicketInfo', data)
            this.setState({
                data: data
            });
            const {name,logo} = data.race;
            const {description} = data.tickets;
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
        const {name,location} = this.state.data.race;
        const {description,price,banner} = this.state.data.tickets;
        return(

            <div className="ticket">
                <div className="logo">
                    <img src={isEmptyObject(banner)?default_img:banner} alt=""/>
                </div>
                <div className="ticket-name">
                    <span className="title">{location}</span>
                    <span className="title">{name}</span>
                </div>
                <div className="ticket-prize">
                    <span>{I18n.t('prize')} <span>¥{price}</span></span>
                </div>
                <div className="line" style={{marginBottom:'20px',marginTop:'20px'}}></div>
                <MarkDown description={description}/>
                <Footer/>
            </div>
        );
    }
}