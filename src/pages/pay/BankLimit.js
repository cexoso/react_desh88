import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images, Drawer} from '../../components';
import {isEmptyObject} from '../../service/utils';
import '../../styles/bankLimit.css';
import BankItem from './BankItem';
import {BANK_ITEMS} from '../../components/constant';

export default class BankLimit extends Component {



    topBar = () => {
        return (
            <div className="topPage">
                <span className="txt cardTxt">{I18n.t('bank_card')}</span>
                <div className="separated"/>
                <span className="txt">{I18n.t('card_type')}</span>
                <span className="txt cardTxt3">{I18n.t('card_limit')}</span>
            </div>
        )
    };
    bankList = () => {

        return(
            <div className="itemsView">
                {BANK_ITEMS.map((item,i) =>{
                    return <BankItem
                        key={i}
                        item={item}/>
                })}
            </div>
        );
    };

    render() {
        return (
            <div className="page">
                {this.topBar()}

                {this.bankList()}

            </div>

        )
    }
}
