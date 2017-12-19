import React, {Component} from 'react';
import markdown from 'marked';
import {Colors, Fonts, Images} from '../../components/Themes';
import I18n from '../../service/I18n';

export default class ReadLike extends Component {

    state={
        likes:100,
        likeChang: false,
    };

    addLike=()=>{
        let likes=this.state.likes;
        likes=likes+1;
        this.setState({
            likes
        })
    };

    lessLike=()=>{
        let likes=this.state.likes;
        likes=likes-1;
        this.setState({
            likes
        })
    };


    render(){
        const{likes} = this.props;
        return(
            <div style={styles.readView}>
                <div style={styles.likesView}
                     onClick={() => {
                         this.setState({
                             likeChang: !this.state.likeChang
                         });
                         if(this.state.likeChang){
                             this.lessLike()
                         }else{
                             this.addLike()
                         }
                     }}>
                    <img style={{width: 16, height: 16, marginRight: 5}}
                         src={this.state.likeChang ? Images.likeRed : Images.like}/>
                    <span style={styles.readTxt}>{this.state.likes}</span>
                </div>

                <span style={styles.readTxt}>{I18n.t('read')}2444</span>
                <div style={{flex: 1}}/>
            </div>
        )
    }
}

const styles = {
    readView: {
        paddingBottom: 16,

        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    readTxt: {
        fontSize: 14,
        color: '#AAAAAA',
        marginRight: 29
    },
    likesView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
}



