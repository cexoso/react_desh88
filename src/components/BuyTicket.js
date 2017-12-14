import React, {Component} from 'react';
import I18n from '../service/I18n';

export default class BuyTicket extends Component {
    render(){
        return(
            <div style={styles.view} onClick={() => {
                this.props.history.push(this.props.load)
            }}>
                <span style={styles.txt}>{I18n.t('buy_ticket')}</span>
            </div>
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
