/**
 * Created by lorne on 2017/12/14
 * Function:
 * Desc:
 */
import React, {PureComponent} from 'react';
import {Flex, ListView, Text, I} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import {Colors} from '../../components/Themes'

export default class CommentList extends PureComponent {


    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.setState({
            dataSource: ds.cloneWithRows([1, 2, 3, 5]),
            height: document.documentElement.clientHeight * 3 / 4,
        })

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
                }}
                dataSource={this.state.dataSource}
                renderRow={this.renderItem}
                onScroll={() => {
                    console.log('scroll');
                }}
                scrollRenderAheadDistance={500}
            />


        </Flex>
    }

    renderItem = (rowData, sectionID, rowID) => {
        console.log(rowData)

        return <Flex>
            <img
                alt={''}
                style={styles.avatar}
                src={'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png'}/>
            <Flex style={{flexDirection: 'column'}}>
                <Flex>
                    <Flex style={{flexDirection: 'column'}}>
                        <Text style={styles.txtName}>花花公子</Text>
                        <Text style={styles.txtTime}>3小时前</Text>

                    </Flex>

                </Flex>


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
        borderRadius: 19
    },
    txtName: {
        color: Colors._666,
        fontSize: 14
    },
    txtTime: {
        fontSize: 10,
        color: Colors._CCC
    }

}