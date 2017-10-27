import React, {Component} from 'react';
import I18n from '../service/I18n';
import '../styles/BuyTicket.css';

export default class BuyTicket extends Component {
    render(){
        return(
            <div className="choiseTicket-bottom" onClick={() => {
                    this.props.history.push(this.props.load)
            }}>
                <span>{I18n.t('buy_ticket')}</span>
            </div>
        );
    }
}
