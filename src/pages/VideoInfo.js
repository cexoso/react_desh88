import React, {Component} from 'react';
import {getVideoInfo, getVideoGroup, setLang} from '../service/RaceDao';
import {getVideoCommentsInfo, postVideoLikesInfo} from '../service/CommentDao';
import {weiXinShare, isEmptyObject, PostRoute, postMsg} from '../service/utils';
import {default_img} from '../components/constant';
import {MarkDown, Footer, BaseComponent} from '../components';
import '../styles/Video.css';
import I18n from '../service/I18n';
import {Images} from '../components/Themes';
import Slider from 'react-slick';
import CommentList from './comment/CommentList';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class VideoInfo extends BaseComponent {


    state = {
        data: {},
        videoGroup: {},
        total_likes: 0,
        current_user_like: false,
        total_views: 0
    };

    componentDidMount() {
        this.refresh();
        document.addEventListener('message', (e) => {
            try {
                let data = JSON.parse(e.data);

                switch (data.action) {
                    case 'REFRESH_COMMENT':
                        this.refreshComment();

                        break;
                    case 'ADD_TOTAL_LIKES':
                        let {total_likes, current_user_like} = this.state;
                        if (current_user_like) {
                            --total_likes;
                        } else {
                            ++total_likes;
                        }
                        this.setState({
                            total_likes,
                            current_user_like: !current_user_like
                        });
                        break;
                    case PostRoute.SCROLL_COMMENT_TOP:
                        this.scrollComment();
                        break;

                }
            } catch (e) {
                throw Error(e)
            }

        });

    };

    refreshComment = () => {

        this.commentList && this.commentList.LoadComment();
    };

    scrollComment = () => {
        this.commentList && this.commentList.scrollTop();
    };

    refresh = () => {
        const {video_id} = this.props.match.params;

        let body = {video_id: video_id};
        getVideoInfo(body, data => {

            setTimeout(() => {
                postMsg(JSON.stringify({route: PostRoute.NewsInfo, param: data}));
            }, 300);

            const {name, cover_link, description, group_id, current_user_like, total_likes, total_views} = data;
            getVideoGroup({video_id: group_id}, data => {
                console.log('videoGroup', data)
                this.setState({
                    videoGroup: data,
                    total_likes: total_likes,
                    current_user_like: current_user_like,
                    total_views: total_views
                });
                this.state.videoGroup.items.map(function (x) {
                    x.isSelect = false
                });

            }, err => {

            });


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
            };
            const url = {url: window.location.href};
            console.log("message:", message.imgUrl);
            weiXinShare(url, message);

            this.setState({
                data: data
            });
        }, err => {

        });
    };

    _onPressItem = (item) => {
        const {cover_link, video_link} = item;
        this.video.src = video_link;
        this.video.setAttribute('poster', cover_link);

        console.log(this.video);
        this.setState({
            data: item
        })
    };

    renderItem = (item) => {
        return (
            <div className="videoFlex"
                 style={styles.videoFlex}
                 onClick={() => {
                     this._onPressItem(item)
                 }}>
                <div
                    style={{
                        backgroundImage: `url(${item.cover_link})`,
                        backgroundSize: '100% 100%',
                        width: 149,
                        height: 90,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <img src={Images.videoControl} alt="" style={{
                        height: 40, width: 40,

                    }}/>

                    <span style={{
                        display: 'flex',
                        fontSize: 14,
                        color: 'white',
                        position: 'absolute',
                        bottom: 55,
                        right: 5
                    }}>{`${item.video_duration}`}</span>

                </div>
                <div style={styles.title3Div}>
                    <span style={styles.title3}>{item.name}</span>
                </div>


            </div>
        )
    };

    videoGroupList = () => {
        const {items} = this.state.videoGroup;
        return (
            <div style={styles.root} className="videoRoot">
                <Slider
                    slidesToShow={3}
                    slidesToScroll={1}
                    FocusOnSelect={true}
                    arrows={false}
                    infinite={false}
                    autoplay={false}>
                    {items.map((item, index) => {
                        return <div key={index}>
                            {this.renderItem(item)}
                        </div>
                    })}
                </Slider>
            </div>
        );
    };

    read = () => {
        const {
            total_views, total_likes
        } = this.state;
        return (
            <div style={styles.readView}>
                <div style={styles.likesView}>
                    <img style={{width: 16, height: 16, marginRight: 5}}
                         src={Images.like}/>
                    <span style={styles.readTxt}>{total_likes}</span>
                </div>

                <span style={styles.readTxt}>{I18n.t('read')} {total_views}</span>
                <div style={{flex: 1}}/>
            </div>
        )
    };

    _render() {
        const {video_id, lang} = this.props.match.params;
        if (isEmptyObject(this.state.data)) {
            return <div></div>;
        }

        const {cover_link, video_link, name, group_name, description} = this.state.data;

        return (
            <div className="video">


                <video
                    ref={ref => this.video = ref}
                    id={'video'}
                    style={styles.videoView}
                    autoPlay={false}
                    controls
                    poster={cover_link}>
                    <source src={video_link} type="video/mp4"/>
                    <source src={video_link} type="video/ogg"/>
                    <source src={video_link} type="video/webm"/>

                    <object data={video_link}>
                        <embed src={video_link}/>
                    </object>
                </video>

                <div style={styles.titleView}>
                    <span style={styles.title}>{name}</span>
                </div>

                {this.state.videoGroup.items.length > 1 ? <div style={styles.groupView}>
                    <div style={styles.title2Div}>
                        <span style={styles.title2}>{group_name}</span>
                    </div>
                    {this.videoGroupList()}

                </div> : null}

                <div style={{marginTop: 1}}>
                    <MarkDown description={description}/>
                </div>

                {this.read()}
                <div style={{height:1,marginLeft:17,marginRight:16,backgroundColor:'#ECECEE'}}/>
                <CommentList
                    user_id={this.user_id}
                    ref={ref => this.commentList = ref}
                    info={{id: video_id, topic_type: 'videos'}}
                    {...this.props}
                />

                <Footer/>
            </div>
        );
    }
}
const styles = {
    root: {
        marginLeft: 17
    },
    gridList: {
        display: 'flex',
        display: '-webkit-box',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        marginLeft: 17,
        backgroundColor: 'red'

    },
    titleStyle: {},
    videoImg: {
        width: 149,
        height: 90
    },
    videoFlex: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',

        boxSizing: 'border-box',
    },
    page: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        color: '#333333',
        fontSize: 17,
        fontWeight: 'bold'

    },
    titleView: {
        padding: 17,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    videoView: {
        height: 216,
        width: '100%',
        marginTop: 1
    },
    groupView: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 5,
        backgroundColor: 'white'
    },
    title2Div: {
        height: 44,
        display: 'flex',
        alignItems: 'center'
    },
    title2: {
        fontSize: 15,
        color: '#333333',
        marginLeft: 17,
        fontWeight: 'bold'
    },
    title3: {
        textOverflow: 'ellipsis',
        fontSize: 14,
        color: '#333333',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        lineHeight: 1.5,
        marginTop: 2
    },
    title3Div: {
        height: 50,
        width: 149
    },
    readView: {
        paddingBottom: 16,

        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    readTxt: {
        fontSize: 14,
        color: '#AAAAAA',
        marginRight: 29
    },
    likesView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }

};