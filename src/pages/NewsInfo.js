import React, {Component} from 'react';
import markdown from 'marked';
import {getNewsInfo, setLang, setToken} from '../service/RaceDao';
import {getNewCommentsInfo,postNewLikesInfo} from '../service/CommentDao';
import '../styles/NewsInfo.css';
import {weiXinShare, isEmptyObject, message_desc, getURLParamKey} from '../service/utils';
import {default_img} from '../components/constant';
import CommentList from './comment/CommentList'
import CommentBottom from './comment/CommentBottom';
import {Colors, Fonts, Images} from '../components/Themes';


export default class NewsInfo extends Component {

    state = {
        news: {},
        likeChang: false
    };

    componentDidMount() {
        const {id, lang} = this.props.match.params;
        let accessToken = getURLParamKey('accessToken', this.props.location.search);
        setToken(accessToken);
        setLang(lang);
        const body = {newsId: id};

        getNewsInfo(body, data => {
            console.log('NewsInfo', data)
            this.setState({
                news: data
            });
            document.title = data.title;

            //获取资讯评论接口
            let newComments = {info_id: id, page: 1, page_size: 10};
            getNewCommentsInfo(newComments, data => {
                console.log('newComments', data);
                this.setState({
                    videoComments: data
                });
            }, err => {

            });
            //获取资讯点赞和取消点赞
            let newLikes={info_id: id};
            postNewLikesInfo(newLikes, data => {
                console.log('newLieksComments', data);
                this.setState({
                    likesComments: data
                });
            }, err => {

            });


            window.postMessage(JSON.stringify(data));
            //微信二次分享
            // const url = {url: "http://www.deshpro.com:3000/race/91/zh"};
            // const url = {url: "http://h5-react.deshpro.com:3000/race/91/zh"};
            const {title, source, date,image_thumb} = data;
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

        })

    }

    desc = (description) => {
        let des = markdown(description)
        return {__html: des}
    };

    content = () => {
        if (!this.isEmptyObject(this.state.news)) {
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
        return (
            <div style={styles.readView}>
                <div style={styles.likesView}
                     onClick={() => {
                         this.setState({
                             likeChang: !this.state.likeChang
                         })
                     }}>
                    <img style={{width: 16, height: 16, marginRight: 5}}
                         src={this.state.likeChang ? Images.likeRed : Images.like}/>
                    <span style={styles.readTxt}>425</span>
                </div>

                <span style={styles.readTxt}>阅读2444</span>
                <div style={{flex: 1}}/>
            </div>
        )
    };


    render() {
        return (
            <div className='content'>

                {this.content()}

                <CommentList/>
                <CommentBottom
                    {...this.props}/>
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
