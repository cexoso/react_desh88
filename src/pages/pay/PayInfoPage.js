import React, {Component} from 'react';
import Tips from './Tips';
import BankLimit from './BankLimit';
import {setLang} from '../../service/RaceDao';
import Footer from '../../components/Footer';

export default class PayInfoPage extends Component {



    state = {
        containerHeight: 0
    };

    render() {
        return (
            <div style={styles.page}>
                <Tips onLayout={(event) => {
                    var viewHeight = event.nativeEvent.layout.height;
                    this.setState({
                        containerHeight: viewHeight
                    });

                }}/>
                <BankLimit containerHeight={this.state.containerHeight}/>
                <Footer/>
            </div>
        )
    }
}

const styles = {
    page: {
        backgroundColor: '#F5F5F5',
        display: 'flex',
        flex: 1,
        paddingBottom:80
    }
}