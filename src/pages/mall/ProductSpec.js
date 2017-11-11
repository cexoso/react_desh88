import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown,Images} from '../../components';

export default class ProductSpec extends Component {

    render() {
        return (
        <div style={styles.page}>
            <span style={styles.spec}>{I18n.t('productSpec')}</span>
            <span style={styles.unSelected}>{I18n.t('unSelected')}</span>
            <span style={styles.selected}>{I18n.t('selected')}</span>
            <span style={styles.package}>A{I18n.t('package')}，1件</span>
            <div style={{display:'flex',flex:1}}/>
            <img style={styles.img} src={Images.is}/>
        </div>
        )
    }
}

const styles = {
    page:{
        marginTop:7,

        backgroundColor:'#FFFFFF',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    spec:{
        fontSize: 14,
        color: '#333333',
        marginLeft:17,
        fontWeight:'bold'
    },
    unSelected:{
        fontSize: 14,
        color: '#AAAAAA',
        marginLeft:24
    },
    selected:{
        fontSize: 14,
        color: '#AAAAAA',
        marginLeft:41
    },
    package:{
        fontSize: 14,
        color: '#333333',
        marginLeft:24,
        fontWeight:'bold'
    },
    img:{
        width:8,height:16,
        marginRight:16
    }
};