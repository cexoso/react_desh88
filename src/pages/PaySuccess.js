import React, {Component} from 'react';
import '../styles/Pay.css'

export default class PaySuccess extends Component {
    componentDidMount() {
        setTimeout(function () {
            window.postMessage('pay-success', window.location.href)
        }, 100)

    }


    render() {
        return ( <p>
                pay-success works!
            </p >
        )
    }
}