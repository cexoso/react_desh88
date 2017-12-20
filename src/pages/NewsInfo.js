import React, {Component} from 'react';
import markdown from 'marked';
import {getNewsInfo, setLang, setToken} from '../service/RaceDao';
import '../styles/NewsInfo.css';
import {weiXinShare, isEmptyObject, message_desc, getURLParamKey, postMsg} from '../service/utils';
import {default_img} from '../components/constant';
import CommentList from './comment/CommentList'
import CommentBottom from './comment/CommentBottom';
import {Colors, Fonts, Images} from '../components/Themes';
import {getNewCommentsInfo,postNewLikesInfo} from '../service/CommentDao';
import {BaseComponent} from '../components';
import Footer from "../components/Footer";
import I18n from '../service/I18n';


export default class NewsInfo extends BaseComponent {

    constructor(props) {
        super(props)
    }

    state = {
        news: {},
        likeChang: false,
        commentList: [],
        newLikes:{}
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        const body = {newsId: id};

        getNewsInfo(body, data => {
            // postMsg(JSON.stringify(data));
            console.log('news', data);
            this.setState({
                news: data
            });
            document.title = data.title;


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

        this.getComment()

    }

    getComment = () => {
        const {id} = this.props.match.params;
        const body = {
            info_id: id,
            page: 1,
            page_size: 20
        };

        getNewCommentsInfo(body, data => {
            this.setState({
                commentList: data.items
            });
            postMsg(JSON.stringify(data))
        }, err => {
            postMsg(err)
        })
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
                        <span>{I18n.t('from_place')}: {source}  </span>
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
            total_views, total_likes
        } = this.state.news;
        return (
            <div style={styles.readView}>
                <div style={styles.likesView}>
                    <img style={{width: 16, height: 16, marginRight: 5}}
                         src={this.state.likeChang ? Images.likeRed : Images.like}/>
                    <span style={styles.readTxt}>{total_likes}</span>
                </div>

                <span style={styles.readTxt}>{I18n.t('read')} {total_views}</span>
                <div style={{flex: 1}}/>
            </div>
        )
    };


    _render() {
        const {id} = this.props.match.params;
        const {commentList} = this.state;

        return (
            <div className='content'>

                {this.content()}

                {commentList.length > 0 ? <CommentList
                    commentList={commentList}
                    {...this.props}
                /> : null}

                <Footer/>

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
        justifyContent: 'flex-end',
        marginBottom:20
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
