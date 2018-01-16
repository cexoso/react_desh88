import React, {Component} from 'react';
import '../../styles/Progress.css';

export default class Progress extends Component {
    state={
        progressWidth:0
    };



    componentDidMount(){
        let vartext=0.22;
        let totalWidth = document.getElementById('totalWidth').clientWidth;
        let progressWidth = totalWidth*vartext;
        this.setState({
            progressWidth:progressWidth
        })
    }

    render() {

        let percent = 0.22;

        return (
            <div className="progress-page">
                <div className="total-width" id="totalWidth"/>
                <div className="progress-width" id="progressWidth" style={{width:this.state.progressWidth}}/>
                <div className="progress-size" style={{marginLeft:this.state.progressWidth}}>
                    <span id="span">{percent}</span>
                </div>
            </div>

        )
    }
}
