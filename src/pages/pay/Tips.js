import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images,Drawer} from '../../components';
import {isEmptyObject} from '../../service/utils';

export default class Tips extends Component {


    render() {
        return (
            <div style={styles.page}>
                <span style={styles.txt}>
                    {I18n.t('limit_description')}
                </span>
            </div>

        )
    }
}

const styles = {
    page:{
        backgroundColor:'#F34A4A',
        opacity:0.6,
        position:'fixed',
        width:'100%',
        top:0,
        zIndex:99,
        display:'flex',
        alignItems:'center',
        paddingTop:5,
        paddingBottom:5
    },
    txt:{
        fontSize:14,
        color:'#FFFFFF',
        marginLeft:17,
        marginRight:17
    }

};