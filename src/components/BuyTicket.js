import React, {Component} from 'react';
import I18n from '../service/I18n';
import {RaisedButton} from '../components';

export default class BuyTicket extends Component {
    render(){
        return(
        <RaisedButton
            backgroundColor={'#090909'}
            style={styles.view}
            label={I18n.t('buy_ticket')}
           labelStyle={styles.txt}
            onClick={()=>{
                this.props.history.push(this.props.load)
            }}
        />
        );
    }
}
const styles={
    view:{
        height:60,
        borderRadius:3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#090909',
        position:'fixed',
        bottom: 5,
        left: 15,
        right: 15,
    },
    txt:{
        fontSize: 18,
        color: '#E0C675',
        alignItems: 'center',
        justifyContent: 'center'
    }
}
