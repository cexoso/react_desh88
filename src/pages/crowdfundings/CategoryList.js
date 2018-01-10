import React, {Component} from 'react';
import {MarkDown, Images,Drawer} from '../../components';
import '../../styles/CrowdfundingPage.css';
import {postClick} from '../../service/utils';

export default class CategoryList extends Component {

    state={
        menu: 0,
        liWidth:0
    };

    componentDidMount(){
        var liWidth = document.getElementById('list0').clientWidth-15;
        this.setState({
            liWidth
        })
    }


    selectMenu = () => {

        switch (this.state.menu) {
            case 0:
                return this.introduce();
            case 1:

                return this.overview();
            case 2:

                return this.announcement();
            case 3:

                return this.risk();

            default:
                return this.introduce()

        }
    };
    line=(index)=>{
        const {menu,liWidth} =this.state;
        if(menu === index){
            return <div className="line" style={{width:liWidth}}/>
        }else{
            return null
        }
    };
    changStyle=(index)=>{
        const {menu} =this.state;
        if(menu === index){
            return 'active'
        }else{
            return ''
        }
    };

    render() {
        console.log("this:",this);
        var items = ['项目介绍','众筹概况','项目公告','投资风险'];
        return (
            <div className="topBar-page">
                <ul className="nav flexRow navbar-nav">
                    {items.map((item,index)=>{
                        return(
                            <li id={`list${index}`} className="flexColumn list" key={index} onClick={()=>{
                                this.setState({
                                    menu:index
                                })
                            }}>
                                <span className={this.changStyle(index)}>{item}</span>
                                {this.line(index)}
                            </li>
                        );
                    })}
                </ul>

                {this.selectMenu()}

                <footer className="flexRow footer">
                    <div className="flexRow race-div" onClick={()=>{
                        postClick(JSON.stringify({route: 'race', param: ''}), this.props.history)
                    }}>
                        <img src="/static/images/android-load.png" alt=""/>
                        <span>及时赛报</span>
                    </div>
                    <div className="flexRow buy-div" onClick={()=>{
                        postClick(JSON.stringify({route: 'buy', param: ''}), this.props.history)
                    }}>
                        <span>我要认购</span>
                    </div>
                </footer>
            </div>

        )
    };


    introduce=()=>{
        return(
            <div>
                introduce
            </div>
        )
    };
    overview=()=>{
        return(
            <div>
                overview
            </div>
        )
    };
    announcement=()=>{
        return(
            <div>
                announcement
            </div>
        )
    };
    risk=()=>{
        return(
            <div>
                risk
            </div>
        )
    }
}
