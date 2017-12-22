import React, {Component} from 'react';
import markdown from 'marked';
import {getNewsInfo, setLang, setToken} from '../service/RaceDao';
import '../styles/NewsInfo.css';
import {
    weiXinShare,
    isEmptyObject,
    message_desc,
    getURLParamKey,
    postMsg,
    PostRoute,
    showToast
} from '../service/utils';
import {default_img} from '../components/constant';
import CommentList from './comment/CommentList'
import {Colors, Fonts, Images} from '../components/Themes';
import {BaseComponent} from '../components';
import Footer from "../components/Footer";


export default class NewsInfo extends BaseComponent {

    constructor(props) {
        super(props);
    }

    state = {
        news: {},
        total_likes: 0,
        current_user_like: false
    };

    componentDidMount() {
        this.refreshNews();
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

                }
            } catch (e) {
                throw Error(e)
            }

        });
    }

    refreshComment = () => {

        this.commentList && this.commentList.LoadComment();
    };

    refreshNews = () => {
        const {id} = this.props.match.params;
        const body = {newsId: id};

        getNewsInfo(body, data => {
            // postMsg(JSON.stringify(data));
            this.setState({
                news: data,
                total_likes: data.total_likes,
                current_user_like: data.current_user_like
            });
            document.title = data.title;

            setTimeout(() => {
                postMsg(JSON.stringify({route: PostRoute.NewsInfo, param: data}));
            }, 300);


            const {title, source, date, image_thumb} = data;
            const message = {
                title: title,
                desc: message_desc(source, date),//分享描述
                link: window.location.href, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: isEmptyObject(image_thumb) ? default_img : image_thumb, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            };

            const url = {url: window.location.href};
            weiXinShare(url, message);
        }, err => {

        });
    };


    desc = (description) => {
        let des = markdown(description)
        return {__html: des}
    };

    content = () => {
        if (!isEmptyObject(this.state.news)) {
            const {
                title, date, source, description
            } = this.state.news;
            return (
                <div className="App">
                    <div className="App-header">
                        <h2>{title}</h2>
                        <span className="App-header-time">{date} </span>
                        <span>来源于: {source}  </span>
                    </div>
                    <div className="App-nav">
                        <div id="images" dangerouslySetInnerHTML={this.desc(description)}></div>
                    </div>

                    {this.read()}

                </div>

            );
        }

    };
    read = () => {
        const {
            total_views
        } = this.state.news;
        return (
            <div style={styles.readView}>
                <div style={styles.likesView}>
                    <img style={{width: 16, height: 16, marginRight: 5}}
                         src={Images.like}/>
                    <span style={styles.readTxt}>{this.state.total_likes}</span>
                </div>

                <span style={styles.readTxt}>阅读 {total_views}</span>
                <div style={{flex: 1}}/>
            </div>
        )
    };


    _render() {
        const {id} = this.props.match.params;


        return (
            <div>

                {this.content()}

                <CommentList
                    ref={ref => this.commentList = ref}
                    info={{id: id, topic_type: 'infos'}}
                    {...this.props}
                />
                <CommentBottom/>
                {/*<Footer/>*/}

            </div>
        )
    };
}

const styles = {
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
}
