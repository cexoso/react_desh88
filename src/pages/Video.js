import React, {Component} from 'react';
import {getVideoInfo,setLang} from '../service/RaceDao';
import {weiXinShare,isEmptyObject} from '../service/utils';
import {default_img} from '../components/constant';
import MarkDown from '../components/MarkDown';
import Footer from '../components/Footer';

export default class Video extends Component {
    state = {
        data: {}
    };

    componentDidMount(){
        const {videoId, lang} = this.props.match.params;
        setLang(lang);
        const body = {videoId: videoId};

        getVideoInfo(body, data => {
            console.log('VideoInfo', data)
            this.setState({
                data: data
            });
            const {name,cover_link,description} = data.items;
            document.title = name;

            //微信二次分享
            // const url = {url: "http://www.deshpro.com:3000/activities/1/zh"};
            // const url = {url: "http://h5-react.deshpro.com:3000/activities/1/zh"};
            const message = {
                title: name,
                desc: description,//分享描述
                link: window.location.href, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: isEmptyObject(cover_link)?default_img:cover_link, // 分享图标
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
        if(isEmptyObject(this.state.data.items)) {
            return <div></div>;
        }
        const {description,video_link} = this.state.data.items;
        return(

            <div className="videoInfo">
                <div className="video">
                    <video src={video_link} controls="controls"/>
                </div>
                <MarkDown description={description}/>
                <Footer/>
            </div>
        );
    }
}