/**
 * Created by lorne on 2017/12/14
 * Function:
 * Desc:
 */
import React, {PureComponent} from 'react';
import {Flex, Button, WhiteSpace} from 'antd-mobile';
import CommentList from './comment/CommentList'

export default class AntDemo extends PureComponent {

    render() {
        return <div style={styles.container}>
            <Button
                style={{width: 100, fontSize: 14, color: 'red', backgroundColor: 'transparent', borderColor: 'red'}}
                size={'small'}
            >按钮</Button>


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