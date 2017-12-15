import React,{Component} from 'react';
import {Colors, Fonts, Images} from '../../components';
import I18n from '../../service/I18n';
import CommentBottom from './CommentBottom';
import CommentItem from './CommentItem';
import ReleaseCommentInfo from './ReleaseCommentInfo';
import {Flex, ListView, Text} from 'antd-mobile';

export default class CommentInfoPage extends Component {


    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        let array = [1, 2, 3, 5];
        this.state = {
            dataSource: ds.cloneWithRows(array),
            height: 200 * array.length,
            releaseShow:false

        }

    };

    releaseInfo = () => {
        this.setState({
            releaseShow: !this.state.releaseShow
        });
        console.log("releaseShow:",this.state.releaseShow);
    };

    renderItem = (rowData, sectionID, rowID) => {
        return (
            <Flex style={styles.listItem}
                  onClick={()=>{

                  }}>
                <CommentItem releaseInfo={this.releaseInfo}/>
            </Flex>
        )
    };


    render(){
        const{releaseShow} = this.state;

        return(
            <div style={styles.bgContainer}>
                <Flex style={{backgroundColor:'#FFFFFF'}}>
                    <CommentItem releaseInfo={this.releaseInfo}/>
                </Flex>

                <Flex style={{backgroundColor:'#ECECEE',marginTop:-1,paddingBottom:16}}>
                    <ListView
                        style={{
                            height: this.state.height,
                            overflow: 'auto',
                            width: '100%'
                        }}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderItem}
                        horizontal={true}
                    />

                </Flex>


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
    },
    listItem:{
        backgroundColor: '#ECECEE',
        paddingTop: 13,
        alignItems: 'flex-start'
    }

}