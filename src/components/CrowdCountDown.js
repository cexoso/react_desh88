/**
 * Created by lorne on 2018/1/6
 * Function:
 * Desc:
 */


import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import './css/CrowdCountDown.css';

class CrowdCountDown extends Component {

    static propTypes = {
        date: PropTypes.string,
        days: PropTypes.objectOf(PropTypes.string),
        hours: PropTypes.string,
        mins: PropTypes.string,
        segs: PropTypes.string,
        onEnd: PropTypes.func
    };

    static defaultProps = {
        date: new Date(),
        days: {
            plural: '天',
            singular: '天',
        },
        hours: ':',
        mins: ':',
        segs: ':',
        onEnd: () => {
        }

    };
    state = {
        days: 0,
        hours: 0,
        min: 0,
        sec: 0,
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const date = this.getDateData(this.props.date);
            if (date) {
                this.setState(date);
            } else {
                this.stop();
                this.props.onEnd();
            }
        }, 1000);
    }

    componentWillMount() {
        const date = this.getDateData(this.props.date);
        if (date) {
            this.setState(date);
        }

    }

    componentWillUnmount() {
        this.stop();
    }

    getDateData(endDate) {
        let diff = endDate - Math.round(new Date() / 1000);

        if (diff <= 0) {
            return false;
        }

        const timeLeft = {
            years: 0,
            days: 0,
            hours: 0,
            min: 0,
            sec: 0,
            millisec: 0,
        };

        if (diff >= (365.25 * 86400)) {
            timeLeft.years = Math.floor(diff / (365.25 * 86400));
            diff -= timeLeft.years * 365.25 * 86400;
        }
        if (diff >= 86400) {
            timeLeft.days = Math.floor(diff / 86400);
            diff -= timeLeft.days * 86400;
        }
        if (diff >= 3600) {
            timeLeft.hours = Math.floor(diff / 3600);
            diff -= timeLeft.hours * 3600;
        }
        if (diff >= 60) {
            timeLeft.min = Math.floor(diff / 60);
            diff -= timeLeft.min * 60;
        }
        timeLeft.sec = diff;
        return timeLeft;
    }

    render() {
        const countDown = this.state;
        let days;
        if (countDown.days === 1) {
            days = this.props.days.singular;
        } else {
            days = this.props.days.plural;
        }
        return (

            <div className="time-page">
                <div className="digital">
                    <span>{this.leadingZeros(countDown.days)}</span>
                </div>
                <span className="timeTxt">天</span>
                <div className="digital">
                    <span>{this.leadingZeros(countDown.hours)}</span>
                </div>
                <span className="timeTxt">时</span>
                <div className="digital">
                    <span>{this.leadingZeros(countDown.min)}</span>
                </div>
                <span className="timeTxt">分</span>
                <div className="digital">
                    <span>{this.leadingZeros(countDown.sec)}</span>
                </div>
                <span className="timeTxt">秒</span>
            </div>


        );
    }

    stop() {
        clearInterval(this.interval);
    }

    leadingZeros(num, length = null) {

        let length_ = length;
        let num_ = num;
        if (length_ === null) {
            length_ = 2;
        }
        num_ = String(num_);
        while (num_.length < length_) {
            num_ = '0' + num_;
        }
        return num_;
    }

}

export default CrowdCountDown;