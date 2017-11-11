import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import ProductBanner from './ProductBanner';
import ProductInfo from './ProductInfo';
import ProductSpec from './ProductSpec';
import ProductIntro from './ProductIntro';
import ProductBottom from './ProductBottom';
import {setLang, getProductDetail} from '../../service/RaceDao';
import {weiXinShare, message_desc, isEmptyObject} from '../../service/utils';
import {default_img} from '../../components/constant';
import I18n from '../../service/I18n';

export default class MallInfoPage extends Component {
    state = {
        product: {}
    };


    componentDidMount() {
        const {id, lang} = this.props.match.params;

        console.log(this.props.match)

        setLang(lang);
        const body = {product_id: id};

        getProductDetail(body, data => {
            console.log('productInfo', data);

            this.setState({
                product: data
            });
            const {name, logo, location, end_date, begin_date} = data.race;
            document.title = name;

            const message = {
                title: name,
                desc: message_desc(location, begin_date, end_date),//分享描述
                link: window.location.href, // 分享链接，该链接域名必须与当前企业的可信域名一致
                imgUrl: isEmptyObject(logo) ? default_img : logo, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            };
            const url = {url: window.location.href};
            console.log("message:", message);
            weiXinShare(url, message);
        }, err => {

        });

    }


    render() {

        return (

            <div >
                <div style={styles.container}>
                    <AppBar
                        title={I18n.t('productIntro')}
                    />
                    <ProductBanner/>

                    <ProductInfo/>

                    <ProductSpec/>

                    <ProductIntro/>

                    <div style={{height: 80}}/>
                </div>


                <ProductBottom/>

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