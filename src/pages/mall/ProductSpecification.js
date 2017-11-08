import React, {Component} from 'react';
import {Colors, Fonts, Images} from '../../components';
import I18n from 'react-native-i18n';
import propTypes from 'prop-types';

export default class ProductSpecification extends Component {
    static propTypes = {
        showSpecInfo: propTypes.func.isRequired
    };

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div
                    style={styleP.specification}
                    onClick={() => {
                        this.props.showSpecInfo()

                    }}>
                    <span style={styleP.specificationTxt1}>产品规格</span>
                    <span style={styleP.specificationTxt2}>未选</span>
                    <span style={styleP.specificationTxt3}>已选</span>
                    <span style={styleP.specificationTxt4}>A套餐</span>
                    <div style={{flex: 1}}/>
                    <img style={styleP.specificationImg} src={Images.is}/>
                </div>

            </div>

        );
    }
}

const styleP = {
    specification: {
        height: 48,
        backgroundColor: "#FFFFFF",
        marginTop: 7,
        flexDirection: 'row',
        alignItems: 'center'
    },
    specificationTxt1: {
        fontSize: 14,
        color: '#333333',
        marginLeft: 17
    },
    specificationTxt2: {
        fontSize: 14,
        color: '#AAAAAA',
        marginLeft: 24
    },
    specificationTxt3: {
        fontSize: 14,
        color: '#AAAAAA',
        marginLeft: 41
    },
    specificationTxt4: {
        fontSize: 14,
        color: '#333333',
        marginLeft: 24
    },
    specificationImg: {
        width: 8,
        height: 16,
        marginRight: 16
    }
}