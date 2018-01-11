import React, {Component} from 'react';
import I18n from '../../service/I18n';
import {MarkDown, Images, Drawer} from '../../components';
import '../../styles/payHelpPage.css';
import {Button} from 'antd-mobile';
import {setLang} from '../../service/RaceDao';

export default class PayHelpPage extends Component {

    state = {
        language: false
    };

    componentDidMount() {
        const {lang} = this.props.match.params;
        setLang(lang);
        setTimeout(() => {
            this.setState({
                language: true
            })
        }, 300)
    }

    render() {
        return (

            <div className="helpPage">
                <Button className="desView weChat"  onClick={()=>{

                }}>
                    <img className="image" src="" alt=""/>
                    <span>{I18n.t('pay_limit_weChat')}</span>
                    <div className="separated"/>
                    <img className="popImg" src="/static/images/is>.png" alt=""/>
                </Button>
                <Button className="desView yinlian" onClick={() => {
                    this.props.history.push(`/pay/description/${this.props.match.params.lang}`)
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
