import React, {Component} from 'react';
import {MarkDown, Images, Drawer} from '../../components';
import '../../styles/CrowdfundingPage.css';
import {postClick} from '../../service/utils';
import {Button} from 'antd-mobile';
import {isEmptyObject} from '../../service/utils';


export default class CategoryList extends Component {

    state = {
        menu: 0,
        navFixed: '',
        itemPage: {}
    };

    componentDidMount() {

        this.itemPageHeight();
        window.onscroll = () => {
            this._changed()
        };
        document.addEventListener("touchstart", this._changed(), false);
        window.onload = () => {
            this.itemPageHeight()
        }
    };

    _changed = () => {
        //计算nav到顶部的距离
        let navHeight = document.getElementById('navbar-nav').offsetTop - (document.documentElement.scrollTop || document.body.scrollTop) + 30;
        let marginWidthHeight = document.getElementById('margin-width').offsetTop - (document.documentElement.scrollTop || document.body.scrollTop);
        let navFixed = "";
        if (marginWidthHeight > 0) {
            navFixed = "";
        } else if (navHeight <= 0) {
            navFixed = 'navbar-nav-fixed'
        }
        this.setState({
            navFixed: navFixed
        });
    };


    itemPageHeight = () => {
        let itemPageHeight = document.getElementById('item-page').clientHeight;
        let itemPageTop = document.getElementById('item-page').offsetTop;
        let navHeight = document.getElementById('navbar-nav').scrollHeight;
        //点击切换按钮 markdown内容从头开始
        if (!isEmptyObject(this.state.navFixed)) {
            window.scrollTo(navHeight, itemPageTop);
        }
        //如果内容少于屏幕高度，则高度默认为屏幕高度
        let screenHeight = document.documentElement.clientHeight || document.body.clientHeight - navHeight;
        let itemPage = {
            height: ''
        };
        if (itemPageHeight < screenHeight) {
            itemPage = {
                height: screenHeight,
                scrollY: 'hidden',
                overflow: 'hidden'
            }
        }
        this.setState({
            itemPage: itemPage
        });
    };


    selectMenu = (categories) => {
        let des = isEmptyObject(categories) ? '' : categories[this.state.menu].description;
        switch (this.state.menu) {
            case 0:
                return this.introduce(des);
            case 1:
                return this.overview(des);
            case 2:
                return this.announcement(des);
            case 3:
                return this.risk(des);

            default:
                return this.introduce(des)

        }
    };
    line = (index) => {
        const {menu} =this.state;

        if (menu === index) {
            return <div className="line" style={{display: 'flex', flex: 1}}/>
        } else {
            return null
        }
    };
    changStyle = (index) => {
        const {menu} =this.state;
        if (menu === index) {
            return 'active'
        } else {
            return ''
        }
    };

    render() {
        const {categories} =this.props;
        return (
            <div className="topBar-page">
                <ul className={`flexRow navbar-nav ${this.state.navFixed}`} id="navbar-nav">
                    {isEmptyObject(categories) ? null : categories.map((item, index) => {
                            return (
                                <li id={`list${index}`} className="flexColumn list" key={index} onClick={() => {
                                    this.itemPageHeight();
                                    this.setState({
                                        menu: index
                                    })
                                }}>
                                    <span className={this.changStyle(index)}>{item.name}</span>
                                    {this.line(index)}
                                </li>
                            );
                        })}
                </ul>
                <div className="margin-width" id="margin-width"/>

                <div id="item-page" style={this.state.itemPage}>
                    {this.selectMenu(categories)}
                </div>

                <div style={{height: 50}}/>

                <footer className="flexRow footer">
                    <Button className="flexRow race-div" onClick={() => {
                        postClick(JSON.stringify({route: 'race', param: ''}), this.props.history)
                    }}>
                        <img src="/static/images/android-load.png" alt=""/>
                        <span>及时赛报</span>
                    </Button>
                    <Button className="flexRow buy-div" onClick={() => {
                        postClick(JSON.stringify({route: 'buy', param: ''}), this.props.history)
                    }}>
                        <span>我要认购</span>
                    </Button>
                </footer>
            </div>

        )
    };


    introduce = (description) => {
        return (
            <div className="item-page introduce-page">
                <MarkDown description={description}/>
            </div>
        )
    };
    overview = (description) => {
        return (
            <div className="item-page overview-page">
                <MarkDown description={description}/>
            </div>
        )
    };
    announcement = (description) => {
        return (
            <div className="item-page announcement-page">
                <MarkDown description={description}/>
            </div>
        )
    };
    risk = (description) => {
        return (
            <div className="item-page risk-page">
                <MarkDown description={description}/>
            </div>
        )
    }
}
