/**
 * Created by lorne on 2017/12/14
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {Flex, ListView, Text} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import {Colors, Images} from '../../components/Themes';
import CommentItem from './CommentItem';
import {getCommentsInfo} from '../../service/CommentDao';
import {postMsg, showToast, _lodash} from '../../service/utils';


export default class CommentList extends Component {


    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.total_count !== r2.total_count});


        let array = [];

        this.state = {
            dataSource: ds.cloneWithRows(array),
            commentList: array,
            page: 1,
            loadMore: true,
            total_count: 0
        }

    };

    componentDidMount() {
        this.getComment();
    }


    LoadComment = () => {
        this.setState({
            loadMore: true,
        });
        setTimeout(() => {
            this.getComment()
        }, 300)
    };

    getComment = () => {

        const {id, topic_type} = this.props.info;
        const body = {
            id: id,
            page: this.state.page,
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
            // postMsg(JSON.stringify({param: data}));
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

    render() {

        return <Flex style={{flexDirection: 'column', marginBottom: 50}} id="comment">
            <Flex style={styles.topTitle}>
                <Text style={styles.txtTitle}>全部评论（{this.state.total_count}）</Text>
            </Flex>
            <ListView
                useBodyScroll
                dataSource={this.state.dataSource}
                renderRow={this.renderItem}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
                pageSize={20}
            />

            <Flex style={{height: 80}}/>


        </Flex>
    }


    onEndReached = () => {
        if (this.state.loadMore)
            this.getComment();
    };

    renderItem = (item, sectionID, rowID) => {
        return (
            <div style={styles.listItem}>
                <CommentItem item={item}/>
            </div>
        )
    }

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
    avatarView: {
        height: 50,
        width: 50,
        marginLeft: 17
    },
    avatar: {
        height: 38,
        width: 38,
        borderRadius: 19,

    },
    txtName: {
        color: Colors._666,
        fontSize: 14,
        marginTop: 6
    },
    txtTime: {
        fontSize: 10,
        color: Colors._CCC,
        marginTop: 3
    },

    listItem: {
        width: '100%',
        backgroundColor: '#F5F5F5'
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
        paddingLeft: 12,
        paddingRight: 17
    },
    content: {
        fontSize: 16,
        color: Colors.txt_444,
        marginTop: 8,
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
    }
};