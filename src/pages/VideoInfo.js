import React, {Component} from 'react';
import {getVideoInfo, setLang} from '../service/RaceDao';
import {weiXinShare, isEmptyObject} from '../service/utils';
import {default_img} from '../components/constant';
import MarkDown from '../components/MarkDown';
import Footer from '../components/Footer';
import '../styles/Video.css';

export default class VideoInfo extends Component {
    state = {
        data: {}
    };

    componentDidMount() {
        const {video_id, lang} = this.props.match.params;
        setLang(lang);
        const body = {video_id: video_id};


        getVideoInfo(body, data => {
            console.log('VideoInfo', data)
            this.setState({
                data: data
            });
            const {name,cover_link,description} = data;
            document.title = name;

            //微信二次分享
            // const url = {url: "http://www.deshpro.com:3000/activities/1/zh"};
            // const url = {url: "http://h5-react.deshpro.com:3000/activities/1/zh"};
            const message = {
                title: name,
                desc: description,//分享描述
                link: window.location.href, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: isEmptyObject(cover_link)?default_img:cover_link, // 分享图标
                type: "", // 分享类型,music、video或link，不填默认为link
                dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
            }
            const url = {url: window.location.href};
            console.log("message:",message);
            weiXinShare(url,message);
        }, err => {

        });

    }

    render() {
        if(isEmptyObject(this.state.data)) {
            return <div></div>;
        }
        const {description, video_link ,cover_link} = this.state.data;

        return (
            <div className="videoInfo">

                <video ref="myVideo" controls="true"  poster={cover_link}>
                    <source src={video_link} type="video/mp4"/>
                    {/*<source src={video_link} type="video/ogg"/>*/}
                    {/*<source src={video_link} type="video/webm"/>*/}
                    <object data={video_link}>
                        <embed src={video_link}/>
                    </object>
                </video>
                <MarkDown description={description}/>
                <Footer/>
            </div>
        );
    }
}