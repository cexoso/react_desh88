import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images,Drawer} from '../../components';
import {isEmptyObject} from '../../service/utils';

export default class Tip extends Component {
    state = {open: false};



    render() {
        return (
            <div style={styles.page}>
                <div style={styles.leftClose}
                     onClick={()=>{
                    this.props.clickTip()
                }}>
                    <img style={styles.leftImg} src={Images.download_close}/>
                </div>

                <div style={styles.download}
                     onClick={()=>{
                         this.props.history.push('/loadApp')
                     }}>
                    <img style={styles.leftImg2} src={Images.puke}/>
                    <span style={styles.txt}>{I18n.t('puke_app')}</span>
                    <div style={{display:'flex',flex:1}}/>
                    <img style={styles.rightImg} src={Images.right}/>
                </div>

            </div>

        )
    }
}

const styles = {
    page:{
        height:34,
        backgroundColor:'#F34A4A',
        position:'fixed',
        width:'100%',
        top:0,
        zIndex:99,
        display:'flex',
        alignItems:'center'
    },
    leftClose:{
        width:30,
        height:34,
        display:'flex',
        alignItems:'center',
        marginLeft:23,

    },
    leftImg:{
        width:18,
        height:18,

    },
    download:{
        height:34,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:26,
        flex:1
    },
    leftImg2:{
        width:25,
        height:25,
        marginRight:20
    },
    txt:{
        fontSize:14,
        color:"#FFFFFF",

    },
    rightImg:{
        width:16,
        height:16,
        marginRight:17
    }
};