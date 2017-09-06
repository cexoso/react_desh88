import React, {Component} from 'react';
import markdown from 'marked';
import {getNewsInfo,setLang} from '../service/RaceDao';
import '../styles/NewsInfo.css';
import I18n from '../service/I18n';
import {weiXinShare} from '../service/utils';

export default class NewsInfo extends Component {

    state = {
        news: {}
    };

    componentDidMount() {
        const {id, lang} = this.props.match.params;
        setLang(lang);
        const body = {newsId: id};
        document.title = I18n.t('app_name');
        getNewsInfo(body, data => {
            console.log('NewsInfo', data)
            this.setState({
                news: data
            })
        }, err => {

        })

        //微信二次分享
        // const url = {url: "http://www.deshpro.com:3000/race/91/zh"};
        const url = {url: "http://h5-react.deshpro.com:3000/race/91/zh"};
        const message = {
            title: this.state.data.race.name,
            desc: this.desc(this.state.data.race.description),
            link: encodeURIComponent(window.location.href),
            imgUrl: this.state.data.logo
        }
        weiXinShare(url,message);
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
                        <span>{source_type}: {source}  </span>
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
