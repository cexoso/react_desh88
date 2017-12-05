import React, {Component} from 'react';
import {Colors} from '../../components';
import I18n from '../../service/I18n';
import {Paper, Images, RaisedButton} from '../../components';

export default class ProductBottom extends Component {

    render() {
        return (
            <Paper style={styles.bottom}>
                <RaisedButton
                    backgroundColor={'#FFFFFF'}
                    icon={<img style={styles.bottomLeftImg} src={Images.cart}/>}
                    style={styles.bottomLeft}
                    onClick={() => {
                        this.props.history.push("/loadApp")
                    }}
                />

                <div style={{display: 'flex', flex: 1}}/>

                <RaisedButton
                    backgroundColor={'#F34A4A'}
                    label={I18n.t('addCart')}
                    style={styles.bottomRight}
                    labelStyle={styles.bottomRightTxt}
                    onClick={() => {
                        this.props.history.push("/loadApp")
                    }}
                />
            </Paper>
        )
    }
}

const styles = {
    bottom: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomLeft: {
        width: '31%',
        height: 40,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#CCCCCC',
        marginLeft: 17,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomLeftImg: {
        width: 24,
        height: 24,
    },
    bottomRight: {
        width: '55%',
        height: 40,
        borderRadius: 3,
        marginRight: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:10
    },
    bottomRightTxt: {
        fontSize: 18,
        color: 'white'
    }

};