/**
 * Created by lorne on 2017/12/14
 * Function:
 * Desc:
 */
import React, {PureComponent} from 'react';
import {Flex, Button, WhiteSpace} from 'antd-mobile';
import CommentList from './comment/CommentList';
import {VideoPlayer} from '../components';
import '../App.css';

export default class AntDemo extends PureComponent {

    render() {
        const videoJsOptions = {

            autoplay: false,
            controls: true,
            poster: 'https://cdn-upyun.deshpro.com/uploads/info/image/82/preview_%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20170724151105.png',
            sources: [{
                src: 'http://deshpro-test-video.ufile.ucloud.com.cn/race01.mp4',
                type: 'video/mp4'
            }]
        };
        return <div style={styles.container}>
            <Button
                style={{width: 100, fontSize: 14, color: 'red', backgroundColor: 'transparent', borderColor: 'red'}}
                size={'small'}
            >按钮</Button>

            <div style={{height:220}}>
                <VideoPlayer {...videoJsOptions}/>
            </div>



        </div>
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

    }
}