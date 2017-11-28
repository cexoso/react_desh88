import React, {Component} from 'react';
import {getLogisticsInfo, setLang, getSubRace} from '../../service/RaceDao';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images,Drawer} from '../../components';
import {isEmptyObject,message_desc,weiXinShare,convertDate} from '../../service/utils';
import {default_img} from '../../components/constant';

export default class LogisticsPage extends Component {
    state={
        logisticsInfo:[]
    };

    componentDidMount() {
        const {shipping_number,express_code,order_number, lang} = this.props.match.params;
        setLang(lang);
        const body = {
            shipping_number: shipping_number,
            express_code: express_code,
            order_number: order_number
        };

        console.log(body)
        getLogisticsInfo(body, data => {
            console.log('LogisticsInfo', data)
            this.setState({
                logisticsInfo: data
            });
            document.title = data.express_code;

            //微信二次分享
            var image=document.getElementById("images").querySelectorAll('img')[0].src;
            const{express_code,site,date} =data;
            const message = {
                title: express_code,
                desc: message_desc(site,date),//分享描述
                link: window.location.href, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: isEmptyObject(image)?default_img:image, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            }
            console.log("message:",message)
            const url = {url: window.location.href};
            weiXinShare(url,message);
        }, err => {

        })

    }


    render() {
        return (
            <div style={styles.page}>
                <div style={styles.top}>

                </div>
                <div style={styles.content}>
                    <div style={styles.contentTop}/>
                    {this.state.logisticsInfo.traces.map((item, i) => <RenderItem key={i} item={item}
                                                         history={this.props.history}
                                                         />)}
                </div>
            </div>

        )
    }
}

class RenderItem extends Component {

    render(){
        const {accept_time,accept_station} = this.props.item;
        console.log(this.props.key)
        return(
            <div style={styles.itemContent}>
                <div style={styles.itemLeft}>
                    <span style={styles.itemLeftTxt}>{convertDate(accept_time,'MM/DD')}</span>
                    <span style={styles.itemLeftTxt2}>{convertDate(accept_time,'hh:mm')}</span>
                </div>
                <div style={styles.radio}/>
                <div style={styles.itemRight}>
                    <span style={styles.itemRightTxt}>{accept_station}</span>
                </div>
            </div>
        )
    }
}

const styles = {
    page:{
        flex:1,
        backgroundColor:'#ECECEE'
    },
    top:{
        marginTop:1,
        backgroundColor:'#FFFFFF',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    content:{
        marginTop:2,
        backgroundColor:'#FFFFFF'
    },
    contentTop:{
        height:50,
    },
    itemContent:{
        marginLeft:16,
        marginRight:71,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    itemLeft:{
        width:39,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    radio:{
        width:14,
        height:14,
        borderRadius:7,
        marginLeft:11
    },

    itemRight:{
        marginLeft:14
    },
    itemLeftTxt:{
        fontSize: 14,
        color: '#F34A4A'
    },
    itemLeftTxt2:{
        fontSize: 10,
        color: '#F34A4A'
    },
    itemRightTxt:{
        fontSize: 14,
        color: '#F34A4A'
    }

};