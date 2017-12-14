import React,{Component} from 'react';
import {Colors, Fonts, Images} from '../../components/Themes';
import I18n from '../../service/I18n';

export default class ReleaseCommentInfo extends Component {
    state={
        text:""
    };


    render(){
        return(
            <div style={styles.bgContainer} onClick={()=>{
                this.props.releaseInfo()
            }}>
                <div style={styles.content}>
                    <div style={styles.inputView}>
                        <img
                            style={styles.searchImg}
                            src={Images.pen}/>
                        <input
                            placeholder={I18n.t('reply')}
                            style={styles.input}/>
                        <div style={{flex:1}}/>

                    </div>
                    <span style={styles.txt}>发布</span>
                </div>
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
    page: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999
    },
    content:{
        display:'flex',
        flexDirection:"row",
        alignItems:'center',
        height:48,
        backgroundColor:'#FFFFFF'
    },
    searchImg: {
        height: 14,
        width: 14,
        marginLeft: 15,
        marginRight:30,
    },
    input: {
        height: 30,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
        backgroundColor: '#ECECEE',
        borderRadius: 40,
        fontSize: 14,
        color: '#CCCCCC'
    },
    inputView:{
        marginLeft: 17,
        height: 30,
        width: 187,
        backgroundColor: Colors._ECE,
        borderRadius: 40,
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt:{
        fontSize: 15,
        color: '#444444',
        marginRight:15
    }

}