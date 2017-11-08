import React, {Component} from 'react';
import {Colors, Fonts, Images} from '../../components';
import I18n from 'react-native-i18n';
import {weiXinShare,isEmptyObject,message_desc} from '../../service/utils';

export default class ShipAddress extends Component {

    state = {
        adrDefault: {}
    };

    componentDidMount() {
        let adrDefault = global.addressList.filter(item => item.default);
        console.log('adrDefault', adrDefault);
        if (adrDefault.length > 0)
            this.setState({adrDefault: adrDefault[0]})

    }


    _adrView = () => {
        const {address, address_detail, consignee, mobile} = this.state.adrDefault;

        return <div style={styleS.shipAddr}>
            <div style={{marginTop: 12}}>
                <div style={{flexDirection: 'row'}}>
                    <span style={styleS.shipAddrTxt1}>{consignee}</span>
                    <span style={styleS.shipAddrTxt1}>{mobile}</span>
                </div>
                <span style={styleS.shipAddrTxt2}>{`${address} ${address_detail}`}</span>
            </div>
            <div style={{flex: 1}}/>
            <img style={styleS.shipAddrImg} src={Images.is}/>
        </div>

    };


    _selectAdr = (address) => {
        console.log('select', address)
    };

    _emptyAdr = () => {
        return <div
            onClick={() => {
                if (isEmptyObject(global.login_user))
                    router.toLoginFirstPage();
                else
                    router.toAdrListPage(this.props, this._selectAdr, {});
            }}
            style={{height: 45, width: '100%', backgroundColor: Colors.white}}>
            <div style={{height: 1, backgroundColor: Colors._ECE, width: '100%'}}/>
            <div style={{
                height: 44, flex: 1, alignItems: 'center', flexDirection: 'row',
                justifyContent: 'space-between', marginLeft: 18
            }}>
                <span style={{fontSize: 12, color: Colors._AAA}}>{I18n.t('no_addr_tip')}</span>
                <img style={{width: 11, height: 20, marginRight: 17}}
                       src={Images.ticket_arrow}/>
            </div>
        </div>
    };


    render() {

        return (
            <div style={styleS.shipAddrView}>
                <div style={styleS.shipAddrName}>
                    <span style={styleS.shipAddrTxt}>
                        收货地址
                    </span>
                </div>

                {isEmptyObject(this.state.adrDefault) ? this._emptyAdr() : this._adrView()}

            </div>
        );
    }
}

const styleS = {
    shipAddrView: {
        marginTop: 9,
    },
    shipAddrName: {
        height: 40,
        backgroundColor: '#FFFFFF',

    },
    shipAddrTxt: {
        fontSize: 14,
        color: '#333333',
        marginLeft: 17,
        marginTop: 11,

    },
    shipAddr: {
        backgroundColor: '#FFFFFF',
        marginTop: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15
    },
    shipAddrImg: {
        width: 8,
        height: 16,
        marginRight: 16
    },
    shipAddrTxt1: {
        fontSize: 14,
        color: '#666666',
        marginLeft: 19
    },
    shipAddrTxt2: {
        fontSize: 14,
        color: '#666666',
        marginLeft: 17,
        marginTop: 5
    }
}