import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images,Drawer} from '../../components';
import {isEmptyObject} from '../../service/utils';
import '../../styles/bankLimit.css';

export default class BankItem extends Component {

    render() {
        const {image,name,credit_single_limit,Debit_single_limit} = this.props.item;
        return (
            <div className="itemPage">
                <img className="itemImg" src={image} alt=""/>
                <span className="itemTxt">{name}</span>
                <div className="separated"/>
                <div className="cardView">
                    <div className="view creditView">
                        <span>{I18n.t('credit_card')}</span>
                        <div className="separated"/>
                        <span className="limitTxt">{credit_single_limit}</span>
                    </div>

                    <div className="view debitView">
                        <span>{I18n.t('debit_card')}</span>
                        <div className="separated"/>
                        <span className="limitTxt">{Debit_single_limit}</span>
                    </div>
                </div>
            </div>

        )
    }
}
