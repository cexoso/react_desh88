/**
 * Created by lorne on 2017/12/14
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {Flex, ListView, Text} from 'antd-mobile';
import {Colors, Images} from '../../components/Themes';
import CommentItem from './CommentItem';
import {getCommentsInfo, delDeleteComment} from '../../service/CommentDao';
import {
    postMsg, showToast, _lodash, PostRoute, getDateDiff,
    postClick, showAlert, isEmptyObject, strNotNull
} from '../../service/utils';
import I18n from '../../service/I18n';

export default class CommentList extends Component {


    constructor(props) {
        super(props);
        let dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.total_count !== row2.total_count
        });


        let array = [];

        this.state = {
            dataSource,
            commentList: array,
            page: 1,
            loadMore: true,
            total_count: 0,
            clickTime: 0,
            showMessage: true,
        }

    };

    scrollTop = () => {
        let timer = null;
        let isTop = true;
        let clickTime = this.state.clickTime;
        clickTime = clickTime + 1;
        if (clickTime > 2) {
            clickTime = 1;
        }
        this.setState({
            clickTime: clickTime
        });

        if (clickTime === 1) {
            timer = setInterval(function () {
                let osTop = document.documentElement.scrollTop || document.body.scrollTop;
                let speed = Math.floor(-osTop / 6);  //速度随距离动态变化，越来越小
                document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
                isTop = true;
                if (osTop === 0) {
                    clearInterval(timer); //回到顶部时关闭定时器
                }
            }, 30);
        } else if (clickTime === 2) {
            let height = document.getElementById('comment').offsetTop;
            window.scrollTo(0, height);
            clickTime = 0;
        }
    };


    componentDidMount() {
        this.getComment(this.state.page);
    }


    LoadComment = () => {
        this.setState({
            loadMore: true,
            commentList: [],
            dataSource: this.state.dataSource.cloneWithRows([]),
            page: 1
        });
        setTimeout(() => {
            this.getComment(1)
        }, 300)
    };

    getComment = (page) => {

        const {id, topic_type} = this.props.info;
        const body = {
            id: id,
            page,
            page_size: 20,
            topic_type: topic_type,
        };

        getCommentsInfo(body, data => {


            let {page, commentList, dataSource, loadMore} = this.state;

            let length = data.items.length;
            if (length > 19) {
                ++page;
            } else {
                loadMore = false;
            }

            commentList = _lodash.unionBy(commentList, data.items, 'id');


            this.setState({
                commentList,
                page: page,
                dataSource: dataSource.cloneWithRows(commentList),
                loadMore,
                total_count: data.total_count

            });
            postMsg(JSON.stringify({route: 'addComment', param: data.total_count}))
        }, err => {
            postMsg(JSON.stringify({err: err}))
        })
    };

    _renderSeparator = () => {
        return (
            <div
                key={_lodash.uniqueId('comment')}
                style={{height: 1, backgroundColor: '#ECECEE', marginTop: 8, marginRight: 17, marginLeft: 68}}/>
        )
    };

    render() {

        return <Flex style={{flexDirection: 'column', marginBottom: 50}} id="comment">
            <Flex style={styles.topTitle}>
                <Text style={styles.txtTitle}>{I18n.t('all_comment')}（{this.state.total_count}）</Text>
            </Flex>
            <ListView
                useBodyScroll
                dataSource={this.state.dataSource}
                renderRow={this.renderItem}
                onEndReached={this.onEndReached}
                renderSeparator={this._renderSeparator}
                onEndReachedThreshold={10}
                pageSize={20}
                renderFooter={() => (<div style={{padding: 30, textAlign: 'center'}}>
                    {this.state.loadMore ? 'Loading...' : ''}
                </div>)}
            />

            <Flex style={{height: 80}}/>


        </Flex>
    }


    onEndReached = () => {
        if (this.state.loadMore)
            this.getComment(this.state.page);
    };

    renderItem = (item, sectionID, rowID) => {
        const {id, user_id, nick_name, avatar, official, body, total_count, created_at, recommended} = item;
        return (<Flex
                key={id}
                style={styles.listItem} onClick={() => {

            }}>
                <div style={styles.avatarView}
                     onClick={() => {
                         this.toDynanic(item)
                     }}>
                    <img
                        alt=""
                        style={styles.avatar}
                        src={this._avatar(avatar)}/>
                </div>
                <Flex style={styles.flexUser}>
                    <Flex style={{width: '100%'}}>
                        <Flex style={styles.flexName}>
                            <Flex>
                                <Text
                                    onClick={() => {
                                        this.toDynanic(item)
                                    }}
                                    style={styles.txtName}>{nick_name}</Text>

                                {official ? <Text style={styles.tagPoker}>{I18n.t('official')}</Text> : null}
                                {recommended ? <Text style={styles.featured}>{I18n.t('featured')}</Text> : null}

                                {this.isMine(user_id) ? <div style={{marginLeft: 8}}
                                                             onClick={() => this.deleteComment(id)}>
                                    <Text style={{fontSize: 12, color: '#666666'}}>{I18n.t('buy_del')}</Text>
                                </div> : null}

                            </Flex>

                            <Text style={styles.txtTime}>{getDateDiff(created_at)}</Text>

                        </Flex>

                        <Flex.Item/>


                        <div
                            onClick={() => {
                                this._replies(item)
                            }}
                            style={{padding: 10, paddingRight: 0, marginLeft: 15}}
                        >
                            <img
                                style={styles.replayImg}
                                src={Images.comment} alt=""/>
                        </div>

                    </Flex>
                    <div style={styles.contentView}>
                        <span style={styles.content}>{body}</span>
                    </div>


                    {this.read(total_count, item)}

                    <div style={{height: 1, backgroundColor: '#DDDDDD', marginTop: 8, marginRight: 17}}/>
                </Flex>


            </Flex>
        )
    };

    read = (total_count, item) => {
        if (total_count > 0)
            return (
                <Flex style={styles.flexNum}
                      onClick={() => {
                          postClick(JSON.stringify({route: 'comments', param: item}), this.props.history)

                      }}>
                    <Text style={styles.txtNum}>{I18n.t('look')}{total_count}{I18n.t('count_reply')}></Text>
                </Flex>
            )
    };

    _avatar = (avatar) => {
        if (isEmptyObject(avatar))
            return Images.home_avatar;
        else if (strNotNull(avatar))
            return avatar;
        else
            return Images.home_avatar;
    };


    isMine = (user_id) => {
        return this.props.user_id === user_id;
    };


    deleteComment = (id) => {
        showAlert('', I18n.t('confirm_delete'), () => {
            delDeleteComment({id: id}, data => {
                showToast(I18n.t('buy_del_success'));
                this.LoadComment()
            }, err => {

            });
        });
    };


    toDynanic = (item) => {
        postClick(JSON.stringify({
            route: PostRoute.ClickAvatar,
            param: item
        }), this.props.history)
    };

    _replies = (item) => {
        postClick(JSON.stringify({route: 'replies', param: item}), this.props.history)
    };

}

const styles = {
    topTitle: {
        height: 37,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%'
    },
    txtTitle: {
        fontSize: 14,
        color: Colors._AAA,
        marginLeft: 17
    },
    listItem: {
        paddingTop: 13,
        alignItems: 'flex-start'
    },
    likeImg: {
        height: 17,
        width: 17,

    },
    replayImg: {
        height: 18,
        width: 20,
        marginTop: -10,
        marginLeft: 10
    },
    flexName: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    flexUser: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'flex-start',
        marginLeft: 15,
        paddingRight: 17
    },
    contentView: {
        wordWrap: 'break-word',
        wordBreak: 'break-all',
        overflow: 'hidden'
    },
    content: {
        fontSize: 16,
        color: Colors.txt_444,
        marginTop: 6,
        lineHeight: 1.4
    },
    flexNum: {
        backgroundColor: Colors._ECE,
        height: 20,
        width: '100%',
        marginTop: 6
    },
    txtNum: {
        fontSize: 12,
        color: '#4990E2',
        marginLeft: 11
    },
    avatarView: {
        height: 50,
        width: 50,
        marginLeft: 17,
        padding: 5
    },
    avatar: {
        height: 38,
        width: 38,
        borderRadius: 19,

    },
    txtName: {
        color: '#4990E2',
        fontSize: 12
    },
    txtTime: {
        fontSize: 10,
        color: Colors._CCC,
        marginTop: 3
    },
    tagPoker: {
        color: "#FFE9AD",
        backgroundColor: '#161718',
        fontSize: 10,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 2,
        marginLeft: 14
    },
    featured: {
        color: "#FFFFFF",
        backgroundColor: '#A1C1E6',
        fontSize: 10,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        borderRadius: 2,
        marginLeft: 9
    },
    likeCount: {
        color: '#AAAAAA',
        fontSize: 12,
        marginLeft: 7,
        marginTop: 2
    }

};