/**
 * Created by lorne on 2017/12/14
 * Function:
 * Desc:
 */
import React, {PureComponent} from 'react';
import {Flex, Button, WhiteSpace, Carousel} from 'antd-mobile';
import CommentList from './comment/CommentList';
import {VideoPlayer} from '../components';
import classnames from 'classnames';
import '../App.css';
var count = 0;
export default class AntDemo extends PureComponent {
    state={
        show:false
    };

    componentDidMount() {
        window.onload=()=>{
            this.pokerScroll()
        }
    };
    pokerScroll=()=>{
        let pokerBottoms = document.getElementById('pokerBottom').getElementsByTagName('div');
        let pokerTops = document.getElementById('pokerTop').getElementsByTagName('div');
        let pokerLefts = document.getElementById('pokerLeft').getElementsByTagName('div');
        let pokerRights = document.getElementById('pokerRight').getElementsByTagName('div');
        let pokers = [];
        pokers = pokers.concat(pokerTops,pokerRights,pokerBottoms,pokerLefts);
        for (var i=0; i < pokers.length; i++) {
            this.setAction(pokers[i],i)
        }
    };

    render() {

        return (
            <div className="ant_page">
                <div className="table">

                </div>

                <div className="pokerTop"  id="pokerTop">
                    {this.pokerTop('poker')}
                    {this.pokerTop('poker poker2')}
                    {this.pokerTop('poker poker3')}
                </div>

                <div className="pokerBottom"  id="pokerBottom">
                    {this.pokerBottom('poker ')}
                    {this.pokerBottom('poker poker2')}
                    {this.pokerBottom('poker poker3')}
                </div>

                <div className="pokerLeft"  id="pokerLeft">
                    {this.pokerLeft('poker')}
                    {this.pokerLeft('poker pokerLeft2')}
                </div>

                <div className="pokerRight" id="pokerRight">
                    {this.pokeRight('poker')}
                    {this.pokeRight('poker pokerLeft2')}
                </div>
            </div>
        )
    }


    pokerBottom = (poker_class) => {
        return <div className={classnames(poker_class)}>
            <div className="select select1" id="Bottom1">弃牌</div>
            <div className="select select2"  id="Bottom2">跟注</div>
            <div className="select select3"  id="Bottom3">加注</div>
        </div>
    };
    pokerTop = (poker_class) => {
        return <div className={classnames(poker_class)}>
            <div className="select select1" id="Top1">加注</div>
            <div className="select select2" id="Top2">跟注</div>
            <div className="select select3" id="Top3">弃牌</div>
        </div>
    };
    pokerLeft = (poker_class) => {
        return <div className={classnames(poker_class)}>
            <div className="select select1" id="Left1">加注</div>
            <div className="select select2" id="Left1">跟注</div>
            <div className="select select3" id="Left1">弃牌</div>
        </div>
    };
    pokeRight = (poker_class) => {
        return <div className={classnames(poker_class)}>
            <div className="select select1" id="Right1">加注</div>
            <div className="select select2" id="Right1">跟注</div>
            <div className="select select3" id="Right1">弃牌</div>
        </div>
    };


    setAction = (poker,index) => {
        setInterval(() => {
            console.log(`打印数字：${count++}`)
        }, 1000)
    }
}

const styles = {}