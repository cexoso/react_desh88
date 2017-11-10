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
        product: {},
        selectProduct: {}
    };

    componentDidMount() {
        const {product_id, lang} = this.props.match.params;
        setLang(lang);

        const body = {product_id: product_id};

        getProductDetail(body, data => {
            console.log("products:",data);
            this.setState({
                product: data.product
            })
        }, err => {

        })
        console.log("products:",this.state.product);
    }


    render() {
        return (
            <div style={styleM.bgContainer}>
                <MallInfoPageTopBar product={this.state.product}/>
            </div>
        );
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