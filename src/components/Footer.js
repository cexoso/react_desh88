import React, {Component} from 'react';
import I18n from '../service/I18n';
import {Link} from 'react-router-dom';
import '../styles/footer.css';

export default class Footer extends Component {
    render() {
        if (window.originalPostMessage)
            return null;
        else
            return (
                <footer className="footer-load"><Link to="/loadApp">
                    <span>{I18n.t('load_app')}</span></Link></footer>
            );

    }
}