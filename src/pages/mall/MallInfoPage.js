import React, {Component} from 'react';
import {MarkDown, Footer, Images} from '../../components';
import I18n from '../../service/I18n';
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
        product: {},
        selectProduct: {}
    };

    componentDidMount() {
        const {product_id, lang} = this.props.match.params;
        setLang(lang);

        let body = {product_id: product_id};

        getProductDetail(body, data => {

            this.setState({
                product: data.product
            })
        }, err => {

        })

    }

    topBar = () => {
        return (<div style={styleM.topBar}>
            <div style={{flex: 1, backgroundColor: 'yellow'}}></div>
            <div style={{flex: 1, backgroundColor: 'blue'}}></div>
            <div style={{flex: 1, backgroundColor: 'white'}}></div>

        </div>)
    };


    render() {
        const {specShow, product, selectProduct} = this.state;
        return (
            <div style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
                {this.topBar()}
                <div style={{height: 300, width: 100, display: 'flex'}}>
                    <div style={{flex: 1, backgroundColor: 'red'}}></div>
                    <div style={{flex: 1, backgroundColor: 'yellow'}}></div>
                    <div style={{flex: 1, backgroundColor: 'pink'}}></div>
                </div>

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
    bgContainer: {
        display: 'flex',
        flex: 1
    },
    topView: {
        backgroundColor: 'rgba(255,255,255,0.98)'
    },
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 44,
    },
    popBtn: {
        height: 44,
        width: 50,

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