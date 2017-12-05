import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {MarkDown, Images,Drawer} from '../../components';
import {isEmptyObject,strNotNull} from '../../service/utils';
import propTypes from 'prop-types';
import _ from 'lodash';

export default class ProductSpecInfo extends Component {
    static propTypes = {
        showSpecInfo: propTypes.func.isRequired
    };
    state = {
        number: 1,
        optionTypes: [],
        tempImg: '',
        tempPrice: '',
        tempStock: 0
    };

    componentDidMount() {

        const {product, selectProduct} = this.props;
        const {icon, master, option_types} = product;
        this.tempProduct = selectProduct;
        const {price, stock} = master;

        this.setState({
            optionTypes: option_types,
            tempImg: icon,
            tempPrice: price,
            tempStock: stock
        });


    };
    addCarts = () => {
        const {id} = this.props.product;
        const {number} = this.state;
        if (isEmptyObject(this.tempProduct) || number < 1) {
            alert(I18n.t('ple_select_all'));
            return;
        }

        alert(I18n.t('add_cart_ok'));
        let selectCommodity = {number: number, variant: this.tempProduct, title: this.tempProduct.title};
        // pushProductToCart(selectCommodity);
        this.props.showSpecInfo(this.tempProduct)
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

            <div style={{display:'flex',marginRight: 29, flexDirection: 'row', alignItems: 'center', marginTop: 14}}>
                <div
                    style={[styles.buyTouch, number === 0 ? styleCutDisable : styleCut]}
                    onClick={() => {
                        if (number > 0) {
                            this.setState({number: --number})
                        }

                    }}>
                    <img style={styles.buyImgCut} src={Images.cut}/>
                </div>

                <div style={styles.buyInput}>
                    <span>{number}</span>
                </div>

                <div
                    style={styles.buyTouch}
                    onClick={() => {

                        if (number < tempStock) {
                            this.setState({
                                number: ++number
                            })
                        } else {
                            alert(I18n.t('max_stock'))
                        }

                    }}>
                    <img style={styles.buyImgAdd} src={Images.add}/>
                </div>
            </div>
        )
    };
    tempValue = (optionTypes) => {

        const {icon, master, variants, title} = this.props.product;

        let obj = {};

        optionTypes.forEach(item => {
            if (item.hasOwnProperty('select')) {
                if (!obj[`${item.id}`]) {
                    obj[`${item.id}`] = item.select.id;


                }
            }
        });

        let tempArr = variants.filter(item => {
            return _.isEqual(obj, item.sku_option_values)

        });


        if (tempArr.length > 0) {
            const {image, price, stock} = tempArr[0];
            this.tempProduct = tempArr[0];
            this.tempProduct.title = title;

            this.setState({
                tempStock: stock,
                tempImg: strNotNull(image) ? image : this.state.tempImg,
                tempPrice: price,
                optionTypes: optionTypes
            })
        } else
            this.setState({optionTypes})


    };
    tabBlank = (x, array) => {

        const {option_values} = x;
        let that = this;
        return <div style={{display:'flex',flexDirection: 'row', flexWrap: 'wrap', marginLeft: 17, marginTop: 16}}>
            {option_values.map(function (item, index) {

                return <div
                    onClick={() => {
                        x.select = item;
                        let newOptions = Array.from(array);

                        that.tempValue(newOptions);
                    }}
                    key={`tab${index}`}
                    style={[styles.tabSearch, {
                        backgroundColor: x.hasOwnProperty('select') && x.select.id === item.id ?
                            '#F34A4A' : '#F6F5F5'
                    }]}>
                    <span
                        style={[styles.txtTab, {
                            color: x.hasOwnProperty('select') && x.select.id === item.id ?
                                Colors.white : Colors.txt_444
                        }]}>{item.name}</span>
                </div>
            })}
        </div>
    };

    optionTypesView = (option_types) => {
        let that = this;

        return <div>
            {option_types.map((x, index, array) => {

                return <div
                    key={`option_types${x.id}`}
                    style={styles.size}>
                    <span style={[styles.sizeTxt1, {marginTop: 11}]}>{x.name}</span>
                    {that.tabBlank(x, array)}
                </div>
            })}

            <div style={styles.buyQuantity}>
                <span style={[styles.sizeTxt1, {marginTop: 20}]}>{I18n.t('buy_count')}</span>
                <div style={{flex: 1}}/>
                {this.buyQuantity()}
            </div>

        </div>
    };


    render() {
        const {product} = this.props;
        if(isEmptyObject(product)){
            return <div style={styles.page}/>
        }
        const {optionTypes, tempImg, tempPrice, tempStock} = this.state;
        return (
            <div style={styles.container} >
                <div style={styles.specificationInfo}>
                    <img
                        style={styles.specificationInfoTopImg}
                        src={tempImg} alt=""/>
                </div>
                <div style={styles.content}>
                    <div style={styles.specificationInfoTop}>

                        <div style={styles.specificationInfoTopM}>
                            <span style={styles.specificationInfoTopP}>
                                {tempPrice}
                            </span>
                            <span style={styles.specificationInfoTopS}>
                                {I18n.t('stock')  + tempStock + I18n.t('pieces')}
                            </span>
                        </div>

                        <div
                            style={styles.closeView}
                            onClick={() => {
                                this.props.showSpecInfo(this.tempProduct)
                            }}>
                            <img style={styles.closeImg} src={Images.close}/>
                        </div>

                    </div>

                    <div style={styles.color}>
                        {this.optionTypesView(optionTypes)}
                        <div style={{height:80}}/>
                    </div>

                </div>
            </div>

        )
    }
}

const styles = {
    page: {
        marginTop: 7,
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 48
    },
    container:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999
    },
    specificationInfo:{
        width: 124,
        height: 120,
        marginLeft: 17,
        position: 'absolute',
        marginTop: 115,
        backgroundColor: 'white',
        zIndex: 9999,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    specificationInfoTop: {
        height: 87,
        backgroundColor: '#FFFFFF',
        display:'flex',
        flexDirection: 'row'
    },
    specificationInfoTopImg:{
        maxWidth: '100%',
        maxHeight: '100%'
    },
    content:{
        paddingBottom:80,
        marginTop: 160,
        backgroundColor: '#EEEEEE'
    },
    specificationInfoTopM: {
        display:'flex',
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
        width: 40,
        height: 40,
        position: 'absolute',
        top: 160,
        right: 20,
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeImg: {
        width: 18,
        height: 18,
    },
    size: {
        backgroundColor: '#FFFFFF',
        marginTop: 1,
        paddingBottom: 16,
        marginLeft: 17,
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
        display:'flex',
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
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buyTouch: {
        width: 33,
        height: 30,
        backgroundColor: '#F6F5F5',
        display:'flex',
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
        display:'flex',
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
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 5
    },
    confirmTxt: {
        fontSize: 18,
        color: '#FFFFFF'
    },
    color:{
        marginTop:3,
        width:'100%',
        backgroundColor:'#FFFFFF'
    }
};