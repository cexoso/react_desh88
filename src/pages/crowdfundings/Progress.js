import React, {Component} from 'react';
import '../../styles/Progress.css';
import {isEmptyObject} from '../../service/utils';

export default class Progress extends Component {
    state = {
        progressWidth: 0
    };


    componentDidMount() {
        let vartext = this.props.percent;
        let totalWidth = document.getElementById('totalWidth').clientWidth;
        let progressWidth = totalWidth * vartext;
        if (isEmptyObject(progressWidth)) {
            progressWidth = 0;
        }
        this.setState({
            progressWidth: progressWidth
        })
    }

    render() {

        let percent = this.props.percent;
        if (percent <= 0) {
            percent = 0
        } else {
            percent = percent.toFixed(2).slice(2, 4);
        }

        return (
            <div className="progress-page">
                <div className="total-width" id="totalWidth"/>
                <div className="progress-width" id="progressWidth" style={{width: this.state.progressWidth}}/>
                <div className="progress-size" style={{marginLeft: this.state.progressWidth}}>
                    <span id="span">{`${percent}%`}</span>
                </div>
            </div>

        )
    }
}
