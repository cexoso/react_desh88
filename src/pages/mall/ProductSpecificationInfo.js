import React, {PureComponent} from 'react';
import {Colors, Fonts, Images, ApplicationStyles, Metrics} from '../../components';
import I18n from '../../service/I18n';
import {} from '../../service/utils';
import _ from 'lodash'

export default class ProductSpecificationInfo extends PureComponent {
    state = {
        number: 1,
        optionTypes: [],
        tempImg: '',
        tempPrice: '',
        tempStock: 0
    };

    componentDidMount() {

        const {icon, master, option_types} = this.props.product;
        const {price, stock} = master;
        this.setState({
            optionTypes: option_types,
            tempImg: icon,
            tempPrice: price,
            tempStock: stock
        })
    }

    tabBlank = (x, array) => {

        const {option_values} = x;
        let that = this;
        return <div style={{flexDirection: 'row', flexWrap: 'wrap', marginLeft: 17, marginTop: 16}}>
            {option_values.map(function (item, index) {

                return <div
                    onClick={() => {
                        x.select = item;
                        let newOptions = Array.from(array);

                        that.tempValue(newOptions);
                    }}
                    key={`tab${index}`}
                    style={[styleP.tabSearch, {
                        backgroundColor: x.hasOwnProperty('select') && x.select.id === item.id ?
                            '#F34A4A' : '#F6F5F5'
                    }]}>
                    <span
                        style={[styleP.txtTab, {
                            color: x.hasOwnProperty('select') && x.select.id === item.id ?
                                Colors.white : Colors.txt_444
                        }]}>{item.name}</span>
                </div>
            })}
        </div>
    };


    buyQuantity = () => {

        const styleCutDisable = {
            backgroundColor: '#FBFAFA'
        };
        const styleCut = {
            backgroundColor: '#F6F5F5'
        };
        let {number, tempStock} = this.state;


        return (

            <div style={{marginRight: 29, flexDirection: 'row', alignItems: 'center', marginTop: 14}}>
                <div
                    style={[styleP.buyTouch, number === 1 ? styleCutDisable : styleCut]}
                    onClick={() => {
                        if (number > 1) {

                            this.setState({number: --number})
                        }

                    }}>
                    <img style={styleP.buyImgCut} src={Images.cut}/>
                </div>

                <div style={styleP.buyInput}>
                    <span>{number}</span>
                </div>

                <div
                    style={styleP.buyTouch}
                    onClick={() => {

                        if (number < tempStock) {
                            this.setState({
                                number: ++number
                            })
                        } else {
                            (I18n.t('max_stock'))
                        }

                    }}>
                    <img style={styleP.buyImgAdd} src={Images.add}/>
                </div>
            </div>
        )
    };

    optionTypesView = (option_types) => {
        let that = this;

        return <div>
            {option_types.map((x, index, array) => {

                return <div
                    key={`option_types${x.id}`}
                    style={styleP.size}>
                    <span style={[styleP.sizeTxt1, {marginTop: 11}]}>{x.name}</span>
                    {that.tabBlank(x, array)}
                </div>
            })}

            <div style={styleP.buyQuantity}>
                <span style={[styleP.sizeTxt1, {marginTop: 20}]}>购买数量</span>
                <div style={{flex: 1}}/>
                {this.buyQuantity()}
            </div>

            <div style={{height: 50}}/>

        </div>
    };


    tempValue = (optionTypes) => {

        const {icon, master, variants} = this.props.product;
        let obj = {};
        optionTypes.forEach(item => {
            if (item.hasOwnProperty('select')) {
                if (!obj[`${item.id}`]) {
                    obj[`${item.id}`] = item.select.id
                }
            }
        });
        console.log('selectOption', obj)

        let tempArr = variants.filter(item => {
            return _.isEqual(obj, item.sku_option_values)

        });

        console.log('arr', tempArr);

        if (tempArr.length > 0) {
            const {image, price, stock} = tempArr[0];
            this.setState({
                tempStock: stock,
                tempImg: image,
                tempPrice: price,
                optionTypes: optionTypes
            })
        } else
            this.setState({optionTypes})


    };

    render() {

        const {optionTypes, tempImg, tempPrice, tempStock} = this.state;


        return (
            <div
                style={styleP.page}>
                <div style={styleP.specificationInfo}>

                    <div style={styleP.specificationInfoTop}>
                        <img style={styleP.specificationInfoTopImg} src={{uri: tempImg}}/>
                        <div style={styleP.specificationInfoTopM}>
                            <span style={styleP.specificationInfoTopP}>
                                {tempPrice}
                            </span>
                            <span style={styleP.specificationInfoTopS}>
                                {I18n.t('stock') + tempStock + I18n.t('pieces')}
                            </span>
                        </div>
                    </div>
                    <div
                        style={styleP.closeView}
                        onClick={() => {
                        }}>
                        <img style={styleP.closeImg} src={Images.close}/>
                    </div>


                    {this.optionTypesView(optionTypes)}

                </div>


                <div style={styleP.confirmView}>
                    <div style={styleP.confirm}>
                        <span style={styleP.confirmTxt}>{I18n.t('confirm')}</span>
                    </div>
                </div>
            </div>

        );
    }
}
const styleP = {
    page: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 99
    },
    specificationInfo: {
        height: '100%',
        marginTop: 160,
        backgroundColor: '#EEEEEE'
    },
    specificationInfoTop: {
        height: 87,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },
    specificationInfoTopImg: {
        width: 124,
        height: 120,
        marginLeft: 17,
        position: 'absolute',
        top: -49,
        backgroundColor: Colors._ECE
    },
    specificationInfoTopM: {
        flexDirection: 'column',
        marginLeft: 158,
        marginTop: 21
    },
    specificationInfoTopP: {
        fontSize: 18,
        color: '#F34A4A'
    },
    specificationInfoTopS: {
        fontSize: 14,
        color: '#333333'
    },
    closeView: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 10,
        right: 16
    },
    closeImg: {
        width: 18,
        height: 18
    },
    size: {
        backgroundColor: '#FFFFFF',
        marginTop: 1,
        paddingBottom: 16
    },
    sizeTxt1: {
        fontSize: 15,
        color: '#444444',
        marginLeft: 17,

    },
    tabSearch: {
        borderRadius: 14,
        height: 28,
        paddingLeft: 17,
        paddingRight: 17,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F5F5',
        marginBottom: 16,
        marginRight: 12
    },
    txtTab: {
        fontSize: 14,
        color: Colors.txt_444
    },
    colorClass: {
        backgroundColor: '#FFFFFF',
        marginTop: 1,
        paddingBottom: 20
    },
    buyQuantity: {
        backgroundColor: '#FFFFFF',
        marginTop: 1,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buyTouch: {
        width: 33,
        height: 30,
        backgroundColor: '#F6F5F5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buyImgCut: {
        width: 12,
        height: 2
    },
    buyImgAdd: {
        width: 12,
        height: 12,
    },
    buyInput: {
        width: 38,
        height: 30,
        borderRadius: 1,
        marginLeft: 2,
        marginRight: 2,
        backgroundColor: '#F6F5F5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buyTextInput: {
        fontSize: 15,
        color: '#444444',
    },
    confirmView: {
        marginTop: 1,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: '100%'
    },
    confirm: {
        height: 40,
        marginLeft: 17,
        marginRight: 16,
        backgroundColor: '#F34A4A',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 5
    },
    confirmTxt: {
        fontSize: 18,
        color: '#FFFFFF'
    }
}