import React, {Component} from 'react';
import {getVideoInfo, getVideoGroup, setLang} from '../service/RaceDao';
import {weiXinShare, isEmptyObject} from '../service/utils';
import {default_img} from '../components/constant';
import MarkDown from '../components/MarkDown';
import Footer from '../components/Footer';
import '../styles/Video.css';
import I18n from '../service/I18n';
import {Images} from '../components/Themes';
import ReactSwipe from 'react-swipes'

export default class VideoInfo extends Component {
    state = {
        data: {},
        videoGroup: {},
        coverLink:'',
        videoLink:'',
        changedDes:''
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
                data: data,
                coverLink:data.cover_link,
                videoLink:data.video_link,
                changedDes:data.description
            });
            const {name, cover_link, description} = data;
            document.title = name;

            //微信二次分享
            // const url = {url: "http://www.deshpro.com:3000/activities/1/zh"};
            // const url = {url: "http://h5-react.deshpro.com:3000/activities/1/zh"};
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
        }, err => {

        });

    };

    render() {
        if (isEmptyObject(this.state.data)) {
            return <div></div>;
        }

        return (
            <div className="videoInfo">
                <div className="videoInfoTop">
                    <video autoPlay="autoPlay" controls="controls"
                           poster={this.state.coverLink}>
                        <source style={{width: '100%'}}
                                src={this.state.videoLink}
                                type="video/mp4"/>
                        <object data={this.state.videoLink}>
                            <embed src={this.state.videoLink}/>
                        </object>
                    </video>
                    <div className="videoTop">
                        <span>{this.state.data.name}</span>
                    </div>
                </div>


                <div className="videoGroup">
                    <div className="videoGroupTop">
                        <span className="videoGroupName">{this.state.data.group_name}</span>
                        <div style={{flex: 1}}/>
                        <span className="videoGroupTxt">{I18n.t('more')}</span>
                        <img className="videoGroupImg" src={Images.more} alt=""/>
                    </div>


                    <div className="card-swipe" >
                        <div className="card-slide">
                            {this.state.videoGroup.items.map((item,index)=>{
                                return(
                                    <div key={index} className="video-slide" onClick={()=>{
                                        this.setState({
                                            changedDes:item.description,
                                            coverLink:item.cover_link,
                                            videoLink:item.video_link
                                        })
                                    }}>
                                        <div className="videoImgs" style={{backgroundImage:`url(${item.cover_link})`,backgroundSize:'100% 100%'}}>
                                            <div className="videoImg">
                                                <img src={Images.videoControl} alt=""/>
                                            </div>
                                            <div className="videoSpan">
                                                <span>{item.video_duration}dd</span>
                                            </div>

                                        </div>
                                        <div className="videoTxt">
                                            <span>yyyyyttbfvsfgsacawrcsdbqwzsaddsfsfdsfdasdsdsdsdsdsdssfdsfgsdgdhchfghf</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
                <MarkDown description={this.state.changedDes}/>
                <div style={{height:60}}/>
                <Footer/>
            </div>
        );
    }
}