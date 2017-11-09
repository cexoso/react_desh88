import React, {Component} from 'react';
import {Colors, Fonts, Images, ApplicationStyles, MarkDown} from '../../components';
import I18n from '../../service/I18n';

export default class MallIntroduction extends Component {

    componentDidMount() {

    };


    markdownView = () => {
        if (this.props.product.hasOwnProperty('description')) {
            const {description} = this.props.product;
            return <MarkDown
                markdownStr={description}/>
        }

    };


    render() {
        return (
            <div style={styleI.production}>
                <div style={styleI.productionName}>
                    <span style={styleI.productionNameTxt}>商品介绍</span>
                </div>
                <div style={{height: 1, backgroundColor: Colors._ECE, width: '100%'}}/>
                {this.markdownView()}

            </div>
        );
    }
}

const styleI = {
    production: {
        marginTop: 5,
        backgroundColor: 'white'
    },
    productionName: {
        height: 40,
        backgroundColor: '#FFFFFF'
    },
    productionNameTxt: {
        fontSize: 14,
        color: '#333333',
        marginLeft: 17,
        marginTop: 11
    }
}