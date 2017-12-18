import React, {Component} from 'react';
import {Colors, Fonts, Images, BaseComponent} from '../../components';
import I18n from '../../service/I18n';
import CommentBottom from './CommentBottom';
import CommentItem from './CommentItem';
import ReleaseCommentInfo from './ReleaseCommentInfo';
import {Flex, ListView, Text} from 'antd-mobile';

export default class CommentInfoPage extends BaseComponent {


    constructor(props) {
        super(props);
        document.title = '评论详情'

    };


    _render() {



        return (
            <div style={styles.bgContainer}
                 onClick={() => {

                 }}>
                {/*<span>{body}</span>*/}
                <span>{this.body}</span>


            </div>
        )
    }

}

const styles = {
    bgContainer: {
        flex: 1,
        backgroundColor: Colors.bg_f5
    },
    container: {
        backgroundColor: '#FFFFFF',
        marginTop: 1,
    },
    allComment: {
        fontSize: 14,
        color: '#AAAAAA',
        marginLeft: 17,
        marginTop: 11
    },
    listItem: {
        backgroundColor: '#ECECEE',
        paddingTop: 13,
        alignItems: 'flex-start'
    }

}