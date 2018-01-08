import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images,Drawer} from '../../components';
import {isEmptyObject} from '../../service/utils';
import '../../styles/payHelpPage.css';
import { Button} from 'antd-mobile';

export default class PayHelpPage extends Component {


    render() {
        return (
            <div className="helpPage">
                <Button className="desView weChat"  onClick={()=>{

                }}>
                    <img className="image" src="" alt=""/>
                    <span>{I18n.t('pay_limit_weChat')}</span>
                    <div className="separated"/>
                    <img  className="popImg" src="/static/images/is>.png" alt=""/>
                </Button>
                <Button className="desView yinlian" onClick={()=>{
                    this.props.history.push("/pay/description")
                }}>
                    <img className="image2" src="" alt=""/>
                    <span>{I18n.t('pay_limit_yinlian')}</span>
                    <div className="separated"/>
                    <img className="popImg" src="/static/images/is>.png" alt=""/>
                </Button>

                <div className="desInfo">
                    <span className="count_beyond">
                        {I18n.t('pay_count_beyond')}
                    </span>

                    <ul className="beyondDes">
                        <li className="desTxt click_button">
                            {I18n.t('click_button')}
                        </li>
                        <li className="desTxt beyond_question">
                            {I18n.t('beyond_question')}
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}
