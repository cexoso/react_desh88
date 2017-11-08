import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import {Colors, Fonts, Images, ApplicationStyles, Metrics} from '../../Themes';
import I18n from 'react-native-i18n';
import {MarkDown, Footer,Images} from '../../components';

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