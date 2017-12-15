import React, {Component} from 'react';
import {Colors, Fonts, Images} from '../../components/Themes';
import PropTypes from 'prop-types';
import I18n from '../../service/I18n';
import {Flex, ListView, Text} from 'antd-mobile';

export default class CommentItem extends Component {
    state={
        showMessage:true,
    };



    read=()=>{
        return(
            <Flex style={styles.flexNum}>
                <Text style={styles.txtNum}>查看34条回复></Text>
            </Flex>
        )
    };

    render() {
        return <Flex style={styles.listItem} onClick={()=>{

        }}>
            <div style={styles.avatarView}>
                <img
                    alt=""
                    style={styles.avatar}
                    src={'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png'}/>
            </div>
            <Flex style={styles.flexUser}>
                <Flex style={{width: '100%'}}>
                    <Flex style={styles.flexName}>
                        <Text style={styles.txtName}>花花公子</Text>
                        <Text style={styles.txtTime}>3小时前</Text>

                    </Flex>

                    <Flex.Item/>

                    <img style={styles.replayImg}
                         src={Images.comment} alt=""/>

                </Flex>

                <Text style={styles.content}>已越来越多的德扑选手参加比赛已越来越已越来越多的德扑选手参加比赛已越来越
                    多的德扑选手参加比赛</Text>

                {this.read()}

                <div style={{width: '100%', height: 1, backgroundColor: '#DDDDDD', marginTop: 8,marginRight:17}}/>
            </Flex>


        </Flex>
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
    content: {
        fontSize: 16,
        color: Colors.txt_444,
        marginTop: 6,
        lineHeight:1.4
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
    avatarView:{
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