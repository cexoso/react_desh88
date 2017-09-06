import React, {Component} from 'react';
import markdown from 'marked';
import {getNewsInfo,setLang} from '../service/RaceDao';
import '../styles/NewsInfo.css';
import I18n from '../service/I18n';
import {weiXinShare,convertDate} from '../service/utils';

export default class NewsInfo extends Component {

    state = {
        news: {}
    };

    componentDidMount() {
        const {id, lang} = this.props.match.params;
        setLang(lang);
        const body = {newsId: id};

        getNewsInfo(body, data => {
            console.log('NewsInfo', data)
            this.setState({
                news: data
            })
            document.title = data.title;
            // document.title = I18n.t('app_name');

            //微信二次分享
            // const url = {url: "http://www.deshpro.com:3000/race/91/zh"};
            // const url = {url: "http://h5-react.deshpro.com:3000/race/91/zh"};
            const{title,logo,source,date} =data;
            const message = {
                title: title,
                desc: this.message_desc(source,date),//分享描述
                link: window.location.href, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: logo, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            }
            const url = {url: window.location.href};
            weiXinShare(url,message);
        }, err => {

        })

    }
    message_desc = (location,date) => {
        var time=convertDate(date,"YYYY.MM.DD");
        return (location+'\n'+time);
    }
    desc = (description) => {
        var des = markdown(description)
        return {__html:des}
    }

    isEmptyObject(e) {
        var t;
        for (t in e)
            return !1;
        return !0
    }
    //click事件


    content = () => {
        if (!this.isEmptyObject(this.state.news)) {
            const {
                title, type, date, source_type, source, image, image_thumb,
                top, description
            } = this.state.news;
            return (
                <div className="App">
                    <div className="App-header">
                        <h2>{title}</h2>
                        <span className="App-header-time">{date} </span>
                        <span>来源于: {source}  </span>
                    </div>
                    <div className="App-nav">
                        <div  dangerouslySetInnerHTML={this.desc(description)}></div>
                  </div>
                </div>

            );
        }

    }


    render() {
        return (
            <div className='content'>

                {this.content()}

            </div>
        )
    };
}
