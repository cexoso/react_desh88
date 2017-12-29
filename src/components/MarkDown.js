import React, {Component} from 'react';
import markdown from 'marked';
import './css/MarkDown.css';
import {_lodash} from '../service/utils';
import 'react-photoswipe/lib/photoswipe.css';
import {PhotoSwipeGallery, PhotoSwipe} from 'react-photoswipe';

let renderer = new markdown.Renderer();

renderer.paragraph = function (text) {
    return '<p>' + text + '</p>' + '</br>';
};

export default class MarkDown extends Component {

    state = {
        options: {
            index: 0
        },
        isOpen: false
    };


    handleClose = () => {
        this.setState({
            isOpen: false
        });
    };


    desc = (description) => {

        let des = markdown(description, {renderer: renderer});
        return {__html: des}
    };

    componentWillMount() {
        this.images = [];
    }

    componentDidMount() {

        let imgs = document.getElementById('marked').getElementsByTagName('img');
        _lodash.forEach(imgs, (item, index) => {

            console.log(item.src, item.width, item.height)
            this.images.push({
                src: item.src,
                w: item.width,
                h: item.height,
                title: ''

            });

            item.addEventListener('click', () => {
                this.markImageClick(index)
            })
        })
    }

    markImageClick = (index) => {

        this.setState({
            options: {
                index
            },
            isOpen: true
        })
    };

    beforeChange = (instance, change) => {
        // console.log(instance, change)
    };

    imageLoadComplete = (instance, index, item) => {
        console.log(index, item)
    };


    renderModel = () => {
        const {options, isOpen} = this.state;
        return <PhotoSwipe
            isOpen={isOpen}
            items={this.images}
            options={options}
            onClose={this.handleClose}
            beforeChange={this.beforeChange}
            imageLoadComplete={this.imageLoadComplete}
        />
    };


    render() {
        const {description} = this.props;
        return (
            <div style={{width: '100%', height: '100%', paddingTop: 20}}>
                <div id={'marked'}
                     className="introduceGame" dangerouslySetInnerHTML={this.desc(description)}/>
                <div style={{height: 40}}/>
                {this.renderModel()}
            </div>

        );
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
        overflow: 'hidden'

    }
}