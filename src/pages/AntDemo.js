/**
 * Created by lorne on 2017/12/14
 * Function:
 * Desc:
 */
import React, {PureComponent} from 'react';
import {Flex, Button, WhiteSpace} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

export default class AntDemo extends PureComponent {

    render() {
        return <div style={{flexDirection: 'column', display: 'flex', flex: 1,
        padding:20}}>
            <Button>default</Button><WhiteSpace/>
            <Button disabled>default disabled</Button><WhiteSpace/>

            <Button type="primary">primary</Button><WhiteSpace/>
            <Button type="primary" disabled>primary disabled</Button><WhiteSpace/>

            <Button type="warning">warning</Button><WhiteSpace/>
            <Button type="warning" disabled>warning disabled</Button><WhiteSpace/>


        </div>
    }
}