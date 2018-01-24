import React, {Component} from 'react';
import I18n from '../service/I18n';
import {Link, withRouter} from 'react-router-dom';
import '../styles/footer.css';

class Footer extends Component {
    render() {
        const {search} = this.props.location;
        if (search.includes('accessToken'))
            return null;
        else
            return (
                <footer className="footer-load"><Link to="/loadApp">
                    <img src="/static/images/poker_footer.png" alt="PokerPro"
                         height={20}/>

                    <span>下载APP 从这里开始你扑客之旅</span>

                    <button type="button">
                        立即下载
                    </button>


                </Link>
                </footer>
            );

    }
}

export default withRouter(Footer)