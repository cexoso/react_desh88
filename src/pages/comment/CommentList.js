/**
 * Created by lorne on 2017/12/14
 * Function:
 * Desc:
 */
import React, {PureComponent} from 'react';
import {Flex, ListView, Text, I} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import {Colors, Images} from '../../components/Themes'

export default class CommentList extends PureComponent {


    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        let array = [1, 2, 3, 5];
        this.state = {
            dataSource: ds.cloneWithRows(array),
            height: 200 * array.length,
        }

    }

    render() {
        return <Flex style={{flexDirection: 'column'}}>
            <Flex style={styles.topTitle}>
                <Text style={styles.txtTitle}>全部评论（343）</Text>
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

    renderItem = (rowData, sectionID, rowID) => {
        console.log(rowData)

        return <Flex style={styles.listItem}>
            <img
                alt={''}
                style={styles.avatar}
                src={'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png'}/>
            <Flex style={styles.flexUser}>
                <Flex style={{width: '100%'}}>
                    <Flex style={styles.flexName}>
                        <Text style={styles.txtName}>花花公子</Text>
                        <Text style={styles.txtTime}>3小时前</Text>

                    </Flex>

                    <Flex.Item/>

                    <img style={styles.replayImg}
                         src={Images.comment}/>

                </Flex>

                <Text style={styles.content}>已越来越多的德扑选手参加比赛已越来越已越来越多的德扑选手参加比赛已越来越
                    多的德扑选手参加比赛</Text>

                <Flex style={styles.flexNum}>
                    <Text style={styles.txtNum}>查看34条回复></Text>
                </Flex>

                <div style={{width: '100%', height: 1, backgroundColor: Colors._ECE, marginTop: 8}}/>


            </Flex>


        </Flex>
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
    avatar: {
        height: 38,
        width: 38,
        borderRadius: 19,
        marginLeft: 17
    },
    txtName: {
        color: Colors._666,
        fontSize: 14
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
        marginTop: 6,
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

}