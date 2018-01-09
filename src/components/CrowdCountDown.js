/**
 * Created by lorne on 2018/1/6
 * Function:
 * Desc:
 */


import React, {
    Component,
    PropTypes,
} from 'react';
import './css/CrowdCountDown.css';

class CrowdCountDown extends Component {


    render() {

        return (

            <div className="time-page">
                <div className="digital">
                    <span>31</span>
                </div>
                <span className="timeTxt">天</span>
                <div className="digital">
                    <span>22</span>
                </div>
                <span className="timeTxt">时</span>
                <div className="digital">
                    <span>45</span>
                </div>
                <span className="timeTxt">分</span>
                <div className="digital">
                    <span>09</span>
                </div>
                <span className="timeTxt">秒</span>
            </div>


        );
    }

}

export default CrowdCountDown;