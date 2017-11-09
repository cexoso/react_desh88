import React, {Component} from 'react';
import {MarkDown, Footer,Images} from '../../components';
import I18n from '../../service/I18n';
import {weiXinShare, message_desc, isEmptyObject,moneyFormat} from '../../service/utils';

export default class MallInfoPageTopBar extends Component {


    componentDidMount() {

    }

    _clickBanner = (index) => {
        const {images} = this.props.product;
        let urls = images.map(item => {
            return {url: item.large}
        });
        console.log(urls);
    };


    _carouselView = () => {
        if (isEmptyObject(this.props.product))
            return;
        const {images} = this.props.product;


        return <div style={styleM.mallInfoBgImg}>
            {images.map((item, index) => {
                return <div
                    key={`banner${index}`}
                    onClick={() => this._clickBanner(index)}
                >
                    <img style={{height: 362, width: '100%'}}
                         src={item.preview}/>
                </div>

            })}
        </div>;
    };

    _detailView = () => {

        if (isEmptyObject(this.props.product))
            return;
        const {title, master} = this.props.product;
        const {price, original_price, origin_point} = master;
        return <div>
            <div style={styleM.mallInfoTop}>
                <span style={styleM.mallInfoTopText}>{title}</span>
            </div>
            <div style={styleM.textPrices}>
                <span style={styleM.textPrice}>¥{price}</span>
                <span style={styleM.textOriginPrice}>¥{original_price}</span>
                <span style={styleM.discount}>2.3折</span>
            </div>
            <div style={styleM.locations}>
                <div style={styleM.return7}><span style={styleM.return7Txt}>7天退换</span></div>
                <span style={styleM.freight}>运费：¥12.00</span>
                <div style={{flex: 1}}/>
                <span style={styleM.location}>{origin_point}</span>
            </div>
        </div>
    };


    render() {


        return (
            <div style={{backgroundColor: '#FFFFFF'}}>

                {this._carouselView()}
                {this._detailView()}

            </div>
        );
    }
}

const styleM = {
    mallInfoBgImg: {
        height: 362,
        backgroundColor: '#FFFFFF'
    },
    mallInfoTop: {
        backgroundColor: '#FFFFFF'
    },
    mallInfoTopText: {
        marginTop: 14,
        marginLeft: 17,
        marginRight: 29,
        fontSize: 17,
        color: '#333333',
        backgroundColor: '#FFFFFF'
    },
    textPrices: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 3
    },
    textPrice: {
        fontSize: 24,
        color: '#F34A4A',
        marginLeft: 17,
    },
    textOriginPrice: {
        fontSize: 14,
        color: '#CCCCCC',
        marginLeft: 14,
        textDecorationLine: 'line-through',
        textDecorationColor: '#CCCCCC'
    },
    discount: {
        fontSize: 14,
        color: '#CCCCCC',
        marginLeft: 8
    },
    locations: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingBottom: 23,
        marginTop: 5
    },
    return7: {
        width: 55,
        height: 21,
        backgroundColor: "#FF6C6C",
        marginLeft: 17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    return7Txt: {
        fontSize: 12,
        color: '#FFFFFF'
    },
    freight: {
        fontSize: 14,
        color: '#AAAAAA',
        marginLeft: 13
    },
    location: {
        fontSize: 14,
        color: '#666666',
        marginRight: 16
    }
}