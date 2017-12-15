import React,{Component} from 'react';
import {Colors, Fonts, Images} from '../../components';
import I18n from '../../service/I18n';
import CommentBottom from './CommentBottom';
import CommentItem from './CommentItem';
import ReleaseCommentInfo from './ReleaseCommentInfo';

export default class CommentInfoPage extends Component {
    state={
        releaseShow:false
    };

    releaseInfo = () => {
        this.setState({
            releaseShow: !this.state.releaseShow
        });
        console.log("releaseShow:",this.state.releaseShow);
    };

    _renderItem=()=>{
        return(
            <CommentItem releaseInfo={this.releaseInfo}/>
        )
    };
    _separator = () => {
        return <div style={{height: 0.5, marginLeft: 68, marginRight: 17, backgroundColor: '#DDDDDD'}}/>;
    };

    render(){
        let dataHosts =[1,2,3,4,5,6,7,8];
        const{releaseShow} = this.state;

        return(
            <div style={styles.bgContainer}>


                <div style={{backgroundColor:'#FFFFFF',marginTop:1,paddingBottom:16}}>
                    <CommentItem releaseInfo={this.releaseInfo}/>
                </div>



                <div  style={{backgroundColor:'#ECECEE',marginBottom:80,overflowX:'scroll'}}>

                    <span style={styles.allComment}>全部评论（333）</span>
                    {/*<FlatList*/}
                        {/*style={{marginTop: 16,backgroundColor:'#ECECEE'}}*/}
                        {/*data={dataHosts}*/}
                        {/*showsHorizontalScrollIndicator={false}*/}
                        {/*ItemSeparatorComponent={this._separator}*/}
                        {/*renderItem={this._renderItem}*/}
                        {/*keyExtractor={(item, index) => `comment${index}`}*/}
                    {/*/>*/}

                    <div style={{height:80}}/>

                </div>

                {releaseShow ? <ReleaseCommentInfo
                        releaseInfo={this.releaseInfo}/> : null}
                <CommentBottom/>
            </div>
        )
    }
}

const styles= {
    bgContainer:{
        flex: 1,
        backgroundColor: Colors.bg_f5
    },
    container:{
        backgroundColor:'#FFFFFF',
        marginTop:1,
    },
    allComment:{
        fontSize: 14,
        color: '#AAAAAA',
        marginLeft:17,
        marginTop:11
    }

}