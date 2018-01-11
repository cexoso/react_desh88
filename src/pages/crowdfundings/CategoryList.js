import React, {Component} from 'react';
import {MarkDown, Images,Drawer} from '../../components';
import '../../styles/CrowdfundingPage.css';
import {postClick} from '../../service/utils';
import {Button} from 'antd-mobile'

const des=`彩云杯主赛day3，27人回归，为主赛FT荣耀而战，为争夺冠军奋斗。

延续昨日的19个级别开打，今日的开局相当血腥，开场5手牌，就有五位选手被淘汰。

到第23盲注级别的时候 ，彩云杯西双版纳站主赛FT终于诞生，孔悦成为FT Chip Leader。

![zhusaiFT22.png](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/76a58df486757fcd67a45cea93a02571.png)

主赛FT合影

![cl孔悦.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/77b94bfbfd2454e61a77f64a48caa59a.jpg)

主赛FTCL 孔悦

* * *

FT成员记分牌详情

![zhusaizuoweibiao.png](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/a6fe3228490097374b08de0c2367831f.png)

FT奖励表

![zhusaiFTjiangli.png](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/4f618475e8d58bdab15bab36b5807d38.png)

* * *

![孔悦.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/5fd6a702b1e63b7b0bb77910c5657beb.jpg)

孔悦 1,903,000 记分牌

最新战绩:2017CPG主赛64名

![林健宇.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/16b84b1ed1a1b82566328c6a8b78b84b.jpg)

林健宇 1,538,000 记分牌

![刘德胜.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/ba14986b66c268cc9d4e1589cf9a6074.jpg)

刘德腾 1,473,000 记分牌

最新战绩:驿站五周年主赛 38名

![王堃.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/9684f8ab0d0bb273dec1b15573568e4c.jpg)

王堃 1,304,000 记分牌

最新战绩:扑克杯澳门站 猎人赛 8名 , 中巡赛上海站冠军

![夏佳明.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/3425da0b6d5030f483925c1e26a70337.jpg)

夏佳明 1,177,000 记分牌

![丘汉威.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/16d05b1f6f768fa6b30c0caad1fb0b2b.jpg)

丘汉威 797,000 记分牌

![陈志强.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/43bda3539e5d18282e7e26f06f61eb45.jpg)

陈志强 507,000 记分牌

![高毕升.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/0550f1284cdf6ca8b9c9ecf9173004b2.jpg)

高毕升 409,000 记分牌

最新战绩:2016 彩云杯昆明站主赛 24名

![李伟.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/20fd3125bec05e42ef41c828faafbe32.jpg)

李伟 231,000 记分牌

最新战绩:2017 彩云杯 昆明站 主赛118 名 ,2017CPG 主赛123名

* * *

dya3 精彩手牌

第19级别 盲注5K/10K 前注1000

UTG 直接 All in 81000记分牌。UTG+1 深码 call UTG+2 3bet ALLin 75w左右的记分牌

UTG+1在纠结思考后，选择了弃牌，秀出了自己的手牌J-J

亮牌UTG Q♥ K♦ UTG+2 A♣ Q♠

翻牌：2♠ T♥ 4♣ 3♦ 6♥

UTG玩家被淘汰，J-J玩家弃的可惜。

UTG+2 刘德腾A-Q获胜。

![刘德胜.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/546394b98b60217eb1eb7ba02fa11947.jpg)

图为刘德胜

第20级别 盲注6000/ 12000 前注2000

微赛德扑的孔悦 在枪口 open 33000 弃牌到大盲金鑫 3bet 116,000，孔悦 call

翻牌 A♥3♣8♥

金鑫看牌，孔悦直接All in，金鑫秒call （20w左右记分牌）

亮牌金鑫A♠K♠ 孔悦 K♥T♥

金鑫顶对顶踢 孔悦抽nuts 花

转牌：5♣ 河牌4♥

孔悦河牌成花~金鑫 被淘汰 获得主赛事19名。

![孔悦.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/cdcc4fd00cf78591010c3010b3669ce7.jpg)

图为孔悦

第21级别 盲注8000/160000 前注2000

场上唯一女选手金天，All in跑马失利，获主赛事17名

HJ位玩家 open 38000 金天在CO位 all in 17.3w 记分牌，HJ位玩家 call

亮牌 HJ玩家：Q♥Q♣ 金天：A♣J♣

翻牌：9♣8♥T♣

金天花顺双抽，加A的outs ，共计15张outs。

转牌：T♥ 河牌4♥

HJ玩家获胜，金天获主赛事17名。

![1.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/499785a582d02674aaf1f40702b8c7d2.jpg)

图为金天

第23级别 盲注 12000 /24000 前注2000

王堃在CO位open 51000，大盲位张珏煜call

翻牌：T♥ 8♣ 2♣

张珏煜过牌，王堃bet 6w ，张珏煜直接All in 43w记分牌

王堃直接站起来秒call

亮牌 王堃 T♣ 6♣ 张珏煜 A♠ K♠

王堃顶对带抽花，张珏煜A高张

转牌 5♥ 河牌2♥

王堃获胜,张珏煜成为主赛FT泡沫。

![王堃.jpg](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/9d4d599b2ebd27fffd06d8df4100dfb4.jpg)

图为 王堃

* * *

![appxiaztu.png](https://cdn-upyun.deshpro.com/uploads/photo/2018/01/9b8c5cd0a3d780bb0bd18075b7f3f7af.png)`

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
                <div className="margin-width"/>
                {this.selectMenu()}

                <div style={{height:50}}/>

                <footer className="flexRow footer">
                    <Button className="flexRow race-div" onClick={()=>{
                        postClick(JSON.stringify({route: 'race', param: ''}), this.props.history)
                    }}>
                        <img src="/static/images/android-load.png" alt=""/>
                        <span>及时赛报</span>
                    </Button>
                    <Button className="flexRow buy-div" onClick={()=>{
                        postClick(JSON.stringify({route: 'buy', param: ''}), this.props.history)
                    }}>
                        <span>我要认购</span>
                    </Button>
                </footer>
            </div>

        )
    };


    introduce=(description)=>{
        return(
            <div className="item-page introduce-page">
                <MarkDown description={description}/>
            </div>
        )
    };
    overview=(description)=>{
        return(
            <div className="item-page overview-page">
                <MarkDown description={description}/>
            </div>
        )
    };
    announcement=(description)=>{
        return(
            <div className="item-page announcement-page">
                <MarkDown description={description}/>
            </div>
        )
    };
    risk=(description)=>{
        return(
            <div className="item-page risk-page">
                <MarkDown description={description}/>
            </div>
        )
    }
}
