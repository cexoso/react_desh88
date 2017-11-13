import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown,Images} from '../../components';

export default class ProductIntro extends Component {

    render() {
        let description = this.props.description;
        return (
            <div style={styles.page}>
                <div style={styles.pageTop}>
                    <span style={styles.productIntro}>{I18n.t('productIntro')}</span>
                </div>
                <div style={styles.content}>
                    <MarkDown style={styles.des} description={description}/>
                </div>

            </div>
        )
    }
}

const styles = {
    page:{
        marginTop:5,
    },
    pageTop:{
        height:40,
        backgroundColor:'#FFFFFF',
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    productIntro:{
        fontSize: 14,
        color: '#333333',
        marginLeft:17,
        fontWeight:'bold'
    },
    content:{
        marginTop:1,
        backgroundColor:'#FFFFFF',
        paddingTop:11,
        paddingBottom:100
    },
    des:{

    }

};