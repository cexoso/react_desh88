import React, {Component} from 'react';
import {Colors, Fonts, Images} from '../../components/Themes';
import PropTypes from 'prop-types';
import I18n from '../../service/I18n';
import {Flex, Text} from '../../components';
import {getDateDiff, postMsg, isEmptyObject, strNotNull, postClick, PostRoute} from '../../service/utils';
import {delDeleteComment} from '../../service/CommentDao';
import {showAlert, showToast} from '../../service/utils';

export default class CommentItem extends Component {
    state = {
        showMessage: true,
    };


    read = (total_count) => {
        if (total_count > 0)
            return (
                <Flex style={styles.flexNum}
                      onClick={() => {
                          postClick(JSON.stringify({route: 'comments', param: this.props.item}), this.props.history)

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
                this.props.LoadComment && this.props.LoadComment()
            }, err => {

            });
        });
    };

    render() {
        const {id, user_id, nick_name, avatar, official, body, total_count, created_at, recommended} = this.props.item;
        return <Flex style={styles.listItem} onClick={() => {

        }}>
            <div style={styles.avatarView}
                 onClick={() => {
                     postClick(JSON.stringify({
                         route: PostRoute.ClickAvatar,
                         param: this.props.item
                     }), this.props.history)
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
                            <Text style={styles.txtName}>{nick_name}</Text>

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
                            this._replies(this.props.item)
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


                {this.read(total_count)}

                <div style={{width: '100%', height: 1, backgroundColor: '#DDDDDD', marginTop: 8, marginRight: 17}}/>
            </Flex>


        </Flex>
    };

    _replies = (item) => {
        postClick(JSON.stringify({route: 'replies', param: item}), this.props.history)
    };
}
const styles = {
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
    txtTitle: {
        fontSize: 14,
        color: Colors._AAA,
        marginLeft: 17
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
}