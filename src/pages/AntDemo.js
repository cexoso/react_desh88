/**
 * Created by lorne on 2017/12/14
 * Function:
 * Desc:
 */
import React, {PureComponent} from 'react';
import {Flex, Button, WhiteSpace} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import CommentList from './comment/CommentList'
import CommentBottom from './comment/CommentBottom';

export default class AntDemo extends PureComponent {


    render() {
        console.log('AntDemo',this);
        return <div>
            <CommentList/>
            <CommentBottom/>

        </div>
    }
}