import React, {Component} from 'react';
import {getVideoInfo, getVideoGroup, setLang} from '../service/RaceDao';
import {weiXinShare, isEmptyObject} from '../service/utils';
import {default_img} from '../components/constant';
import MarkDown from '../components/MarkDown';
import Footer from '../components/Footer';
import '../styles/Video.css';
import I18n from '../service/I18n';
import {Images} from '../components/Themes';
import {GridList, GridTile} from 'material-ui/GridList';

export default class VideoInfo extends Component {
    state = {
        data: {},
        videoGroup: {},
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
            this.state.videoGroup.items.map(function (x) {
                x.isSelect = false
            });

        }, err => {

        });

        getVideoInfo(body, data => {
            console.log('VideoInfo', data)

            this.setState({
                data: data,
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
    _onPressItem=(item)=>{
        const {items} = this.state.videoGroup;
        const {data} = this.state;
        let newSelects = [...items];
        let data2 =[...data];
        newSelects.map(function (x) {
            if (x.id === item.id) {
                item.isSelect = true;
                data2 = x;
            }else{
                item.isSelect =false;
            }
        });

        this.setState({newSelects,
            data:data2})
    };

    videoGroupList=()=>{
        const {items} = this.state.videoGroup;
        return(
            <div style={styles.root}>
                <GridList style={styles.gridList} cols={1}>
                    {items.map((item,index) => (
                        <div key={index} onClick={()=>{
                            this._onPressItem(item)
                        }}>
                            <GridTile
                                key={index}
                                title={item.title}

                                titleStyle={styles.titleStyle}
                            >
                                <div style={styles.videoFlex}>
                                    <div className="videoImgs"
                                         style={{backgroundImage: `url(${item.cover_link})`, backgroundSize: '100% 100%'}}>
                                        <div className="videoImg">
                                            <img src={Images.videoControl} alt=""/>
                                        </div>
                                        <div className="videoSpan">
                                            <span>{item.video_duration}dd</span>
                                        </div>

                                    </div>
                                    <div className="videoTxt">
                                        <span>{item.name}</span>
                                    </div>

                                </div>

                            </GridTile>
                        </div>
                    ))}
                </GridList>
            </div>
        );
    };

    render() {
        if (isEmptyObject(this.state.data)) {
            return <div></div>;
        };
        const {description, video_link ,cover_link,name,group_name} = this.state.data;

        return (
            <div className="videoInfo">
                <div className="videoInfoTop">
                    <video autoPlay="autoPlay" controls="controls"
                           poster={cover_link}>
                        <source style={{width: '100%'}}
                                src={video_link}
                                type="video/mp4"/>
                        <object data={video_link}>
                            <embed src={video_link}/>
                        </object>
                    </video>
                    <div className="videoTop">
                        <span>{name}</span>
                    </div>
                </div>


                <div className="videoGroup">
                    <div className="videoGroupTop">
                        <span className="videoGroupName">{group_name}</span>
                        <div style={{flex: 1}}/>
                        <span className="videoGroupTxt">{I18n.t('more')}</span>
                        <img className="videoGroupImg" src={Images.more} alt=""/>
                    </div>

                    {this.videoGroupList()}

                </div>
                <MarkDown description={description}/>
                <div style={{height:60}}/>
                <Footer/>
            </div>
        );
    }
}
const styles = {
    root: {
        width:'100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop:17,

    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        marginLeft:12,
        marginRight:17
    },
    titleStyle: {

    },
    videoImg:{
        width:149,
        height:90
    },
    videoFlex:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:149
    }
};