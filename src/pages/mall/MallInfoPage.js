import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import ProductBanner from './ProductBanner';
import ProductInfo from './ProductInfo';
import ProductSpec from './ProductSpec';
import ProductIntro from './ProductIntro';
import ProductBottom from './ProductBottom';
import Tip from './Tip';
import {setLang, getProductDetail} from '../../service/RaceDao';
import {weiXinShare, message_desc, isEmptyObject} from '../../service/utils';
import {default_img} from '../../components/constant';
import I18n from '../../service/I18n';

export default class MallInfoPage extends Component {
    state = {
        product: {},
        showTip:true
    };


    componentDidMount() {
        const {id, lang} = this.props.match.params;

        setLang(lang);
        const body = {product_id: id};

        getProductDetail(body, data => {
            console.log('productInfo', data);

            this.setState({
                product: data
            });
            const {title, icon, description, end_date, begin_date} = data.product;
            document.title = title;

            const message = {
                title: title,
                desc: message_desc(description, begin_date, end_date),//分享描述
                link: window.location.href, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: isEmptyObject(icon) ? default_img : icon, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            };
            const url = {url: window.location.href};
            console.log("message:", message);
            weiXinShare(url, message);
        }, err => {

        });

    };

    _clickTip=()=>{
        this.setState({
            showTip:!this.state.showTip
        })
    };


    render() {
        const{product} = this.state.product;
        if(isEmptyObject(product)){
            return <div/>
        }

        return (

            <div >
                <div style={styles.container}>

                    {this.state.showTip?<Tip clickTip={this._clickTip} history={this.props.history}/>:null}
                    <ProductBanner banners={product.images}/>

                    <ProductInfo master={product.master}/>

                    <ProductSpec product={product}/>

                    <ProductIntro description={product.description}/>

                    <div style={{height: 80}}/>
                </div>


                <ProductBottom history={this.props.history}/>

            </div>
        );
    }

}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'scroll'
    }

};