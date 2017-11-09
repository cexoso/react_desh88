import React, {Component} from 'react';
import {Colors, Fonts, Images} from '../../components';
import I18n from '../../service/I18n';
import PropTypes from 'prop-types';

export default class MallInfoBottom extends Component {

    static propTypes = {
        showSpecInfo: PropTypes.func.isRequired
    };

    componentDidMount() {

    }


    render() {
        return (
            <div style={styleB.mallBottom}>
                <div
                    style={styleB.shoppingCar}
                    onClick={() => {
                    }}>
                    <img style={styleB.shoppingCarImg} src={Images.shoppingCart}/>
                    <div style={styleB.shoppingCarView}>
                        <span style={styleB.shoppingCarTxt}>1</span>
                    </div>
                </div>
                <div style={{flex: 1}}/>
                <div
                    onClick={() => {
                        this.props.showSpecInfo()
                    }}
                    style={styleB.joinShoppingCar}>
                    <span style={styleB.joinShoppingCarTxt}>加入购物车</span>
                </div>
            </div>
        );
    }
}

const styleB ={
    mallBottom: {
        height: 50,
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderColor: '#EEEEEE',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        zIndex: 99
    },
    shoppingCar: {
        borderRadius: 3,
        width: 118,
        height: 40,
        marginLeft: 17,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    joinShoppingCar: {
        backgroundColor: '#F34A4A',
        borderRadius: 3,
        width: 208,
        height: 40,
        marginRight: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoppingCarImg: {
        width: 24,
        height: 23
    },
    shoppingCarView: {
        backgroundColor: '#F34A4A',
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 60,
        bottom: 15
    },
    shoppingCarTxt: {
        fontSize: 12,
        color: '#FFFFFF'
    },
    joinShoppingCarTxt: {
        fontSize: 18,
        color: '#FFFFFF'
    }
}