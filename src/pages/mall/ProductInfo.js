import React, {Component} from 'react';
import {Colors} from '../../components';

export default class ProductInfo extends Component {

    render() {
        return <div style={styles.page}>
            <span style={styles.title}>筹码套装无面值 德州扑克筹码百家乐麻将筹码币11.5克单色子100码</span>
            <div style={styles.viewPrice}>
                <span style={styles.price1}>¥</span>
                <span style={styles.price2}>4999.00</span>

                <span style={styles.price3}>5999.00</span>
                <span style={styles.price4}>2.3折</span>
            </div>

            <div style={styles.viewLogistics}>
                <span style={styles.logistics1}>7天退换</span>

                <span style={styles.logistics2}>运费：¥12.00</span>
                <div style={{flex: 1}}/>
                <span style={styles.logistics3}>深圳</span>

            </div>

        </div>
    }
}

const styles = {
    page: {
        display: 'flex',
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 14,
        paddingBottom: 22,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors._333
    },
    viewPrice: {
        display: 'flex',
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'flex-end'
    },
    price1: {
        fontSize: 18,
        color: '#F34A4A',
        marginBottom: 2
    },
    price2: {
        fontSize: 24,
        color: '#F34A4A',
        marginLeft: 5
    },
    price3: {
        fontSize: 14,
        color: Colors._CCC,
        marginLeft: 10,
        textDecorationLine: 'line-through',
        marginBottom: 5
    },
    price4: {
        fontSize: 14,
        color: Colors._CCC,
        marginLeft: 10,
        marginBottom: 5
    },
    viewLogistics: {
        display: 'flex',
        alignItems: 'center'
    },
    logistics1: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#FF6C6C',
        borderRadius: 2,
        color: 'white',
        fontSize: 12
    },
    logistics2: {
        fontSize: 14,
        color: Colors._CCC,
        marginLeft: 13
    },
    logistics3: {
        fontSize: 14,
        color: Colors._666,
    },
};