import React, {Component} from 'react';
import {MarkDown, Footer,Images} from '../../components';
import I18n from 'react-native-i18n';
import MallInfoPageTopBar from './MallInfoPageTopBar';
import ProductSpecification from './ProductSpecification';
import ShipAddress from './ShipAddress';
import MallIntroduction from './MallIntroduction';
import MallInfoBottom from './MallInfoBottom';
import ProductSpecificationInfo from './ProductSpecificationInfo';
import {getProductDetail, setLang} from '../../service/RaceDao';


export default class MallInfoPage extends Component {
    state = {
        specShow: false,
        opacity: 0,
        product: {}
    };

    componentDidMount() {
        const {product_id, lang} = this.props.match.params;
        setLang(lang);

        let body = {product_id: product_id}

        getProductDetail(body, data => {

            this.setState({
                product: data.product
            })
        }, err => {

        })

    }

    topBar = () => {
        return (<div style={[styleM.topBar, {backgroundColor: 'rgba(255,255,255,' + this.state.opacity + ')'}]}>
            <div
                style={styleM.popBtn}
                onClick={}>
                <img style={styleM.backImg}
                       src={Images.mall_return}/>
            </div>
            <div style={{flex: 1}}/>
            <div
                style={styleM.popBtn}
                onClick={() => {
                }}>
                <img style={styleM.imgShare}
                       src={Images.mall_share}/>
            </div>


        </div>)
    };


    render() {
        const {specShow, product} = this.state;
        return (
            <div style={styleM.bgContainer}>




            </div>

        );
    }

    _onScroll = (event) => {
        let offsetY = Math.abs(event.nativeEvent.contentOffset.y);
        const offsetHeight = 360;

        if (offsetY >= offsetHeight) {
            this.setState({
                opacity: 1
            })
        } else {
            let opacity = offsetY / offsetHeight;
            this.setState({opacity})
        }
    };

    showSpecInfo = () => {
        this.setState({
            specShow: !this.state.specShow
        })
    }
}

const styleM = {
    bgContainer:{
        display:'flex',
        flex:1
    },
    topView: {
        backgroundColor: 'rgba(255,255,255,0.98)'
    },
    topBar: {
        height:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        // paddingTop: Metrics.statusBarHeight,
        position: 'absolute',
        top: 0,
        width: '100%'
    },
    popBtn: {
        height: 44,
        width: 50,
        justifyContent: 'center'
    },
    backImg: {
        width: 23,
        height: 23,
        marginLeft: 15
    },
    imgShare: {
        height: 22,
        width: 23,
        marginRight: 24.8
    },
}