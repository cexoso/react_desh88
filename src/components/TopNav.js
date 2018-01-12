/**
 * Created by lorne on 2018/1/12
 * Function:
 * Desc:
 */

import React, {PureComponent} from 'react';
import '../styles/footer.css';

export default class TopNav extends PureComponent {

    render() {
        return <div className="top-bar">
            <a href={'https://www.deshpro.com/'}>
                <img src="/static/images/home_bar.png" alt="PokerPro" height={20}/>
            </a>

            <div style={{flex: 1}}>
                <img src="/static/images/footerImg.png" alt="PokerPro"
                     height={20}/>
            </div>

            <div/>
        </div>
    }
}