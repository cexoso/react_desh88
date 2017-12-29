/**
 * Created by lorne on 2017/12/14
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {Flex, ListView, Text} from 'antd-mobile';
import {Colors, Images} from '../../components/Themes';
import CommentItem from './CommentItem';
import {getCommentsInfo} from '../../service/CommentDao';
import {postMsg, showToast, _lodash} from '../../service/utils';
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
            clickTime: 0
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

    _renderSeparator=(sectionID,rowID)=>{
        return(
            <div key={`${sectionID}-${rowID}`} style={{height: 1, backgroundColor: '#ECECEE', marginTop: 8, marginRight: 17,marginLeft:68}}/>
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
        return (
            <div key={rowID}  style={styles.listItem}>
                <CommentItem
                    LoadComment={this.LoadComment}
                    user_id={this.props.user_id}
                    {...this.props}
                    item={item}/>
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
        backgroundColor: '#FFFFFF'
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