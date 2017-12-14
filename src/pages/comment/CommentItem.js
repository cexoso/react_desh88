import React, {Component} from 'react';
import {Colors, Fonts, Images} from '../../components/Themes';
import PropTypes from 'prop-types';
import I18n from '../../service/I18n';

export default class CommentItem extends Component {
    state={
        showMessage:true,
    };

    static propTypes = {
        releaseInfo: PropTypes.func.isRequired
    };

    moreMessage=()=>{
        if(this.state.showMessage){
            return (
                <div
                    style={styles.moreMessagesView}
                    onClick={()=>{
                        {/*global.router.toCommentInfoPage();*/}
                    }}>
                    <span style={styles.moreMessages}>查看34条回复></span>
                </div>
            )
        }

    };

    render() {
        return (
            <div style={styles.content}>
                <div onClick={()=>{
                    this.props.releaseInfo();
                }}>
                    <img style={styles.img} src={Images.empty_image}/>
                </div>
                <div style={styles.contentRight}>
                    <div style={styles.commentTop}>
                        <span style={styles.name}>花花公子</span>
                        <div style={{flex:1}}/>
                        <div
                            style={styles.commentView}>
                            <img style={styles.commentImg} src={Images.comment}/>
                        </div>

                    </div>
                    <span style={styles.time}>3小时前</span>
                    <span style={styles.messages}>已越来越多的德扑选手参加比赛</span>
                    {this.moreMessage()}
                </div>

            </div>
        )
    }
}
const styles = {
    content:{
        width:'100%',
        flexDirection:'row',
        alignItems:'flex-start',
        paddingBottom:6,
        paddingTop:13
    },
    img:{
        width:38,
        height:38,
        borderRadius:19,
        marginLeft:17,
        top:-2
    },
    contentRight:{
        alignItems:'flex-start',
        flex:1,
        marginLeft:11,
        marginRight:17
    },
    name:{
        fontSize: 14,
        color: '#666666',
    },
    commentImg:{
        width:20,
        height:18
    },
    commentTop:{
        flexDirection:'row',
        alignItems:'flex-start',

    },
    time:{
        fontSize: 10,
        color: '#CCCCCC',
    },
    messages:{
        fontSize: 16,
        color: '#444444',
        marginTop:6
    },
    moreMessagesView:{
        width:'100%',
        height:20,
        marginRight:17,
        backgroundColor:'#ECECEE',
        alignItems:'flex-start',
        marginTop:10,
        justifyContent:'center'
    },
    moreMessages:{
        fontSize: 12,
        color: '#4990E2',
        marginLeft:11
    },
    commentView:{
        alignItems:'center',
        justifyContent:'center'
    }
}