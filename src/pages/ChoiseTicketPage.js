import React,{Component} from 'react';
import {setLang,getChoiseTicketInfo} from '../service/RaceDao';
import I18n from '../service/I18n';
import  '../styles/ChoiseTicketPage.css';
import {default_img} from '../components/constant';
import {isEmptyObject,weiXinShare,message_desc} from '../service/utils';
import Time from 'react-time-format';

export default class ChoiseTicketPage extends Component{
    state = {
        choiseTicket:{},
        showButton1:"raceBotton raceBottonShow",
        showButton2:"raceBotton"
    }

    componentDidMount(){
        const {id, lang} = this.props.match.params;
        setLang(lang);

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
            const{name,logo,location,begin_date,end_date} =data.race;
            const message = {
                title: name,
                desc: message_desc(location,begin_date,end_date),//分享描述
                link: window.location.href, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: isEmptyObject(logo)?default_img:logo, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            }
            const url = {url: window.location.href};
            weiXinShare(url,message);

        }, err => {

        });
    }


    render(){
        const {race} = this.state.choiseTicket;
        if(isEmptyObject(race)){
            return <div></div>;
        }
        return(
          <div className="choiseTicket">
              <div className="choiseTicket-name">
                  <span></span>
              </div>
              <div className="choiseTicket-sace">
                  <span style={{flex:1,marginLeft:17,marginTop:13}}>{I18n.t('selectRace')}</span>
                  <div className="raceButtons">
                      <div className={this.state.showButton1} onClick={()=>{
                          this.setState({
                              showButton1 : "raceBotton raceBottonShow",
                              showButton2 : "raceBotton"
                          })
                      }}>{I18n.t('mainRace')}</div>
                      <div style={{marginLeft:20}} className={this.state.showButton2} onClick={()=>{
                          this.setState({
                              showButton2 : "raceBotton raceBottonShow",
                              showButton1 : "raceBotton"
                          })
                      }}>{I18n.t('sideRace')}</div>
                  </div>
              </div>

              <div className="choiseTicket-contents">
                    <div className="choiseTicket-content">
                        <img style={{marginLeft:17,width:80,height:104,marginTop:16}} src={race.logo} alt=""/>
                        <div className="content-right">
                            <div className="right-title">{race.name}</div>
                            <div className="right-tl">
                                <span className="right-time"><Time value={race.begin_date} format="YYYY.MM.DD"/>-<Time
                                    value={race.end_date} format="YYYY.MM.DD"/></span>
                                <span className="right-location">{I18n.t('location')} {race.location}</span>
                            </div>
                            <div className="right-si">
                                <span className="right-sale">¥{race.ticket_price}</span>
                                <span className="right-remain">{I18n.t('surplus')}{I18n.t('spread')}</span>
                                <span className="right-info">{I18n.t('lookDetail')}</span>
                            </div>
                        </div>

                    </div>
              </div>

              <div className="choiseTicket-bottom">
                  <span>{I18n.t('buy_ticket')}</span>
              </div>
          </div>
        );
    }
}
