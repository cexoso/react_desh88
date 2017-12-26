/**
 * Created by lorne on 2017/12/14
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {Flex, ListView, Text} from 'antd-mobile';
import {getPersonDynamic} from '../../service/CommentDao';

export default class PersonDynamicPage extends Component {


    state={
        personDynamic:{}
    };

    componentDidMount() {
        let body ={};
        getPersonDynamic(body, data => {
            console.log('PersonDynamic', data);
            this.setState({
                personDynamic: data
            });
        }, err => {

        });
    };

    render() {
        return <div>

        </div>
    }

}

const styles = {

}