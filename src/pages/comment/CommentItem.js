import React, {Component} from 'react';
import {Colors, Fonts, Images} from '../../components/Themes';
import PropTypes from 'prop-types';
import I18n from '../../service/I18n';
import {Flex, Text,} from '../../components';
import {getDateDiff, postMsg,isEmptyObject,strNotNull} from '../../service/utils';

export default class CommentItem extends Component {
    state = {
        showMessage: true,
    };


    read = (total_count) => {
        if (total_count > 0)
            return (
                <Flex style={styles.flexNum}
                      onClick={() => {
                          postMsg(JSON.stringify({route: 'comments', param: this.props.item}))

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

    render() {

        const {id, user_id, nick_name, avatar, official, body, total_count, created_at} = this.props.item;
        return <Flex style={styles.listItem} onClick={() => {

        }}>
            <div style={styles.avatarView}
                 onClick={() => {

                 }}>
                <img
                    alt=""
                    style={styles.avatar}
                    src={this._avatar(avatar)}/>
            </div>
            <Flex style={styles.flexUser}>
                <Flex style={{width: '100%'}}>
                    <Flex style={styles.flexName}>
                        <Text style={styles.txtName}>{nick_name}</Text>
                        <Text style={styles.txtTime}>{getDateDiff(created_at)}</Text>

                    </Flex>

                    <Flex.Item/>

                    <img
                        onClick={() => {
                            this._replies(this.props.item)
                        }}
                        style={styles.replayImg}
                        src={Images.comment} alt=""/>

                </Flex>
                <div style={styles.contentView}>
                    <span style={styles.content}>{body}</span>
                </div>


                {this.read(total_count)}

                <div style={{width: '100%', height: 1, backgroundColor: '#DDDDDD', marginTop: 8, marginRight: 17}}/>
            </Flex>


        </Flex>
    }

    _replies = (item) => {
        postMsg(JSON.stringify({route: 'replies', param: item}))
    }
}
const styles = {
    listItem: {
        paddingTop: 13,
        alignItems: 'flex-start'
    },
    replayImg: {
        height: 18,
        width: 20,
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
    },
    avatar: {
        height: 38,
        width: 38,
        borderRadius: 19,

    },
    txtName: {
        color: Colors._666,
        fontSize: 14
    },
    txtTime: {
        fontSize: 10,
        color: Colors._CCC,
        marginTop: 3
    }
}