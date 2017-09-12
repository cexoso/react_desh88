import React, {Component} from 'react';
import I18n from '../service/I18n';
import {Link} from 'react-router-dom';
import '../styles/footer.css';

export default class Footer extends Component {
    render(){
        return(
            <footer><Link  to="/loadApp">
                <span>{I18n.t('load_app')}</span></Link></footer>
        );
    }
}