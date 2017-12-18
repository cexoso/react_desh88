import React, {Component} from 'react';
import {Colors, Fonts, Images} from '../../components/Themes';
import I18n from '../../service/I18n';
import PropTypes from 'prop-types';
import {List, InputItem, Modal, Button} from '../../components';
import 'antd-mobile/dist/antd-mobile.css';
import {postComment} from '../../service/CommentDao';
import {strNotNull, showToast} from '../../service/utils';

export default class CommentBottom extends Component {

    state = {
        text: '',
        likeButton: false,
        showInput: false
    };


    render() {

        const {showInput} = this.state;
        return (
            <footer>
                {showInput ? this.inputComment() : this.likeShare()}
            </footer>

        );
    }

    likeShare = () => {
        const {likeButton, showInput} = this.state;
        return <div style={styles.bottom}>
            <div
                onClick={() => {
                    this.setState({
                        showInput: !showInput
                    });

                    setTimeout(() => {
                        this.autoFocusInst && this.autoFocusInst.focus();
                    }, 500)
                }}
                style={styles.search}>
                <img
                    style={styles.searchImg}
                    src={Images.pen}/>
                <span style={styles.input}>{I18n.t('write_comment')}</span>

            </div>
            <div style={{flex: 1}}/>

            <div
                style={styles.commentWhiteView}>
                <img style={styles.commentWhite} src={Images.commentWhite}/>
            </div>

            <div
                style={styles.likeView}
                onClick={() => {
                    this.setState({likeButton: !likeButton})
                }}>
                <img style={styles.like} src={likeButton ? Images.likeRed : Images.like}/>
            </div>
            <div style={{flex: 1}}/>
            <div
                style={styles.forwardView}>
                <img style={styles.forward} src={Images.forward}/>
            </div>

        </div>

    };


    inputComment = () => {


        return <Modal
            popup
            visible={this.state.showInput}
            animationType="slide-up"
        >

            <div style={styles.bottom}>
                <List style={{width: '80%', marginLeft: 5, borderWidth: 0}}>
                    <InputItem
                        style={styles.inputComment}
                        placeholder="回复花花公子"
                        ref={el => this.autoFocusInst = el}
                        onChange={comment => {
                            this.comment = comment
                        }}
                    />

                </List>

                <div
                    onClick={this.release}
                    style={styles.release}>
                    <span style={{color: Colors.txt_444, fontSize: 15}}>评论</span>
                </div>


            </div>
        </Modal>

    };

    release = () => {
        if (!strNotNull(this.comment)) {
            showToast('评论不能为空')
        }

        const body = {
            topic_type: this.props.topic_type,
            topic_id: this.props.topic_id,
            body: this.comment
        };

        postComment(body, data => {
            showToast('评论成功');
            window.postMessage(JSON.stringify(data))
        }, err => {
            showToast('评论失败');
            window.postMessage(JSON.stringify(err))
        })

    }


}

const styles = {
    bottom: {
        height: 48,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#EEEEEE',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',


    },
    input: {
        fontSize: 14,
        color: '#CCCCCC',

    },
    search: {
        marginLeft: 17,
        height: 30,
        width: 187,
        backgroundColor: Colors._ECE,
        borderRadius: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchImg: {
        height: 14,
        width: 14,
        marginLeft: 15,
        marginRight: 10,
    },
    commentWhiteView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 27,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5
    },
    commentWhite: {
        width: 22,
        height: 20
    },
    likeView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 31,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5
    },
    like: {
        width: 20,
        height: 19
    },
    forwardView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 31,
        marginRight: 17,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5
    },
    forward: {
        width: 24,
        height: 24
    },
    badge: {
        position: 'absolute',
        top: -5,
        left: '60%'
    },
    inputComment: {
        backgroundColor: Colors._ECE,
        height: 30,
        borderRadius: 15,
        paddingLeft: 20,
        fontSize: 14
    },
    release: {
        flex: 1,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 40,
        justifyContent: 'center',
        marginRight: 17
    }
}