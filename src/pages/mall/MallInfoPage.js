import React, {Component} from 'react';
import {AppBar} from 'material-ui';
import ProductBanner from './ProductBanner';
import ProductInfo from './ProductInfo';


export default class MallInfoPage extends Component {


    render() {


        return (
            <div style={styles.container}>
                <AppBar
                    title="商品详情"
                />
                <ProductBanner/>

                <ProductInfo/>

            </div>
        );
    }

}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    }

};