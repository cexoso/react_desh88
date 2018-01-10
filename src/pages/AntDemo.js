/**
 * Created by lorne on 2017/12/14
 * Function:
 * Desc:
 */
import React, {PureComponent} from 'react';
import {Flex, Button, WhiteSpace, Carousel} from 'antd-mobile';
import CommentList from './comment/CommentList';
import {VideoPlayer} from '../components';
import '../App.css';

export default class AntDemo extends PureComponent {

    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        slideIndex: 0,
    }

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

            <Carousel className="space-carousel"
                      frameOverflow="visible"
                      cellSpacing={10}
                      slideWidth={0.8}
                      autoplay
                      infinite
                      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                      afterChange={index => this.setState({slideIndex: index})}
            >
                {this.state.data.map((val, index) => (
                    <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{
                            display: 'block',
                            position: 'relative',
                            top: this.state.slideIndex === index ? -10 : 0,
                            height: this.state.imgHeight,
                            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{width: '100%', verticalAlign: 'top'}}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({imgHeight: 'auto'});
                            }}
                        />
                    </a>
                ))}
            </Carousel>


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