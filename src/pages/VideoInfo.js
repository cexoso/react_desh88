import React, {Component} from 'react';
import {getVideoInfo, getVideoGroup,setLang} from '../service/RaceDao';
import {weiXinShare, isEmptyObject} from '../service/utils';
import {default_img} from '../components/constant';
import MarkDown from '../components/MarkDown';
import Footer from '../components/Footer';
import '../styles/Video.css';
import I18n from '../service/I18n';
import {Images} from '../components/Themes';

export default class VideoInfo extends Component {
    state = {
        data: {},
        videoGroup:{}
    };

    componentDidMount() {
        const {video_id, lang} = this.props.match.params;
        setLang(lang);
        const body = {video_id: video_id};

        getVideoGroup(body, data => {
            console.log('videoGroup', data)
            this.setState({
                videoGroup: data
            });

        }, err => {

        });

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
                <div className="videoTop">
                    <span>{this.state.data.name}</span>
                </div>

                <div className="videoGroup">
                    <div className="videoGroupTop">
                        <span className="videoGroupName">{this.state.data.group_name}</span>
                        <div style={{flex:1}}/>
                        <span className="videoGroupTxt">{I18n.t('more')}</span>
                        <img className="videoGroupImg" src={Images.more} alt=""/>
                    </div>
                    {this.state.videoGroup.items.map((item)=>{

                    })}
                </div>
                <MarkDown description={description}/>
                <Footer/>
            </div>
        );
    }
}