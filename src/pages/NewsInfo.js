import React, {Component} from 'react';
import markdown from 'marked';
import {getNewsInfo,setLang} from '../service/RaceDao';
import '../styles/NewsInfo.css';
import {weiXinShare,isEmptyObject,message_desc} from '../service/utils';
import {default_img} from '../components/constant';
import I18n from '../service/I18n';
import {Link} from 'react-router-dom';

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

            //微信二次分享
            // const url = {url: "http://www.deshpro.com:3000/race/91/zh"};
            // const url = {url: "http://h5-react.deshpro.com:3000/race/91/zh"};
            var image=document.getElementById("images").querySelectorAll('img')[0].src;
            console.log("image:",image)
            const{title,source,date} =data;
            const message = {
                title: title,
                desc: message_desc(source,date),//分享描述
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
                title,  date, source, description
            } = this.state.news;
            return (
                <div className="App">
                    <div className="App-header">
                        <h2>{title}</h2>
                        <span className="App-header-time">{date} </span>
                        <span>来源于: {source}  </span>
                    </div>
                    <div className="App-nav" >
                        <div id="images" dangerouslySetInnerHTML={this.desc(description)}></div>
                  </div>
                </div>

            );
        }

    }


    render() {
        return (
            <div className='content'>

                {this.content()}
                <footer><Link  to="/loadApp">
                    {I18n.t('app_plant')}<span>{I18n.t('load_app')}</span></Link></footer>
            </div>
        )
    };
}
