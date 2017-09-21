import React, {Component} from 'react';
import {getVideoInfo, setLang} from '../service/RaceDao';
import {weiXinShare, isEmptyObject} from '../service/utils';
import {default_img} from '../components/constant';
import MarkDown from '../components/MarkDown';
import Footer from '../components/Footer';
import '../styles/Video.css';
import '../components/css/font-awesome.min.css';

export default class VideoInfo extends Component {
    state = {
        styles:{
            width:'0.1%'
        },
        toggle:true,
        switchName:"switch  icon-play",
        currTime:'00:00:00',
        totalTime:'00:00:00',
        data: {
            name: '扑克王品牌形象大使-李思晓',
            video_link: 'http://deshpro-video.cn-gd.ufileos.com/lisixiao2.mp4',
            cover_link: 'http://deshpro.ufile.ucloud.com.cn/uploads/video/cover_link/16/李思晓.png',
            description: '由北京杯赛事组委会主办的BPC-皇城五坛系列赛（Five temples of the Beijing city）将于8月全新起航！'
        }
    };

    componentDidMount() {
        // const {videoId, lang} = this.props.match.params;
        // setLang(lang);
        // const body = {videoId: videoId};
        const {name, description, cover_link}=this.state.data;
        const message = {
            title: name,
            desc: description,//分享描述
            link: window.location.href, // 分享链接，该链接域名必须与当前企业的可信域名一致
            imgUrl: isEmptyObject(cover_link) ? default_img : cover_link, // 分享图标
            type: "", // 分享类型,music、video或link，不填默认为link
            dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
        }
        const url = {url: window.location.href};
        console.log("message:", message);
        weiXinShare(url, message);

        // getVideoInfo(body, data => {
        //     console.log('VideoInfo', data)
        //     this.setState({
        //         data: data
        //     });
        //     const {name,cover_link,description} = data.items;
        //     document.title = name;
        //
        //     //微信二次分享
        //     // const url = {url: "http://www.deshpro.com:3000/activities/1/zh"};
        //     // const url = {url: "http://h5-react.deshpro.com:3000/activities/1/zh"};
        //     const message = {
        //         title: name,
        //         desc: description,//分享描述
        //         link: window.location.href, // 分享链接，该链接域名必须与当前企业的可信域名一致
        //         imgUrl: isEmptyObject(cover_link)?default_img:cover_link, // 分享图标
        //         type: "", // 分享类型,music、video或link，不填默认为link
        //         dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
        //     }
        //     const url = {url: window.location.href};
        //     console.log("message:",message);
        //     weiXinShare(url,message);
        // }, err => {
        //
        // });

    }


    getVideoId = () => {
        return this.refs.myVideo;
    }
    render() {
        // if(isEmptyObject(this.state.data.items)) {
        //     return <div></div>;
        // }
        // const {description,video_link} = this.state.data.items;
        if (isEmptyObject(this.state.data)) {
            return <div></div>;
        }
        const {description, video_link ,cover_link} = this.state.data;
        var tTime=0;

        return (
            <div className="videoInfo">
                <video ref='myVideo'
                       src={video_link}
                       preload="auto"
                       poster={cover_link} onCanPlay={()=>{
                            tTime=this.getVideoId().duration;//获取总时长
                            var h=Math.floor(tTime/3600);
                            var m=Math.floor(tTime%3600/60);
                            var s=Math.floor(tTime%60);
                            h=h>=10?h:"0"+h;
                            m=m>=10?m:"0"+m;
                            s=s>=10?s:"0"+s;
                            this.setState({
                                totalTime:h+":"+m+":"+s
                            })
                    }} onTimeUpdate={()=>{
                        tTime=this.getVideoId().duration;//获取总时长
                        var cTime=this.getVideoId().currentTime;
                        var h=Math.floor(cTime/3600);
                        var m=Math.floor(cTime%3600/60);
                        var s=Math.floor(cTime%60);
                        h=h>=10?h:"0"+h;
                        m=m>=10?m:"0"+m;
                        s=s>=10?s:"0"+s;
                        var value=cTime/tTime;
                        this.setState({
                            currTime:h+":"+m+":"+s,
                            styles:{
                                width:value*100+"%"
                            }
                        })
                    }} onMouseOut={()=>{
                        this.setState({
                            toggle:!this.state.toggle
                        })
                     }} onMouseLeave={()=>{
                        this.setState({
                            toggle:!this.state.toggle
                        })
                }}>
                </video>
                {this.state.toggle?this.ControlProgress():<div/>}

                <MarkDown description={description}/>
                <Footer/>
            </div>
        );
    }

    judge=(video)=>{
        if(video.paused){
            video.play();
            this.setState({
                switchName:"switch  icon-pause"
            })
        }else{
            video.pause();
            this.setState({
                switchName:"switch  icon-play"
            })
        }
    }

    ControlProgress = () => {

        return(
            <div className="controls">
                <a href="#" className={this.state.switchName} onClick={()=>{
                    this.judge(this.getVideoId());
                }}></a>
                <div className="progress">
                    <div className="curr-progress" ref='currProgress' style={this.state.styles}></div>
                </div>
                <div className="time">
                    <span ref='currTime' className="curr-time">{this.state.currTime}</span>/<span ref='totalTime' className="total-time">{this.state.totalTime}</span>
                </div>
                <a href="#" className="extend  icon-resize-full" onClick={()=>{
                    this.getVideoId().webkitRequestFullScreen();
                }}></a>
            </div>
        )
    };
}