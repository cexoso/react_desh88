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
import {toPersonDynamic} from '../../service/RaceDao';

export default class CommentList extends Component {


    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        let array = this.props.commentLists.items;
        this.state = {
            dataSource: ds.cloneWithRows(array),
            height: 200 * array.length
        }

    };



    render() {
        const{commentLists} = this.props;
        const{items} =commentLists;
        return <Flex style={{flexDirection: 'column'}}>
            <Flex style={styles.topTitle}>
                <Text style={styles.txtTitle}>全部评论（{items.length}）</Text>
            </Flex>
            <ListView
                style={{
                    height: this.state.height,
                    overflow: 'auto',
                    width: '100%'
                }}
                dataSource={this.state.dataSource}
                renderRow={this.renderItem}
                horizontal={true}
            />


        </Flex>
    }


    separator = (sectionID, rowID) => (
        <div
            key={`${sectionID}-${rowID}`}
            style={{
                backgroundColor: '#F5F5F9',
                height: 8,
                borderTop: '1px solid #ECECED',
                borderBottom: '1px solid #ECECED',
            }}
        />
    );

    renderItem = (item, sectionID, rowID) => {
        return (
            <Flex style={styles.listItem}
                  onClick={()=>{

                  }}>
                <CommentItem item={item}/>
            </Flex>
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
    avatarView:{
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
        backgroundColor: '#F5F5F5',
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