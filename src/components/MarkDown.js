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
        modelVisible: false,
        options: {
            closeOnScroll: false
        }
    };


    handleClose = () => {
        this.setState({
            modelVisible: false
        });
    };


    desc = (description) => {

        let des = markdown(description, {renderer: renderer});
        return {__html: des}
    };

    componentDidMount() {
        this.images = [];
        let imgs = document.getElementById('marked').getElementsByTagName('img');
        _lodash.forEach(imgs, (item, index) => {
            let img = new Image();
            img.src = item.src;
            this.images.push({
                src: item.src,
                w: img.width,
                h: img.height,
                title: ''

            });

            item.addEventListener('click', () => {
                this.markImageClick(index)
            })
        })
    }

    markImageClick = (index) => {

        this.setState({
            modelVisible: !this.state.modelVisible,
            options: {
                index,
                closeOnScroll: false
            }
        })
    };

    renderModel = () => {
        const {options, isOpen} = this.state;
        if (this.state.modelVisible)
            return <div style={styles.container}>
                <PhotoSwipeGallery
                    isOpen={false}
                    items={this.images}
                    onClose={this.handleClose}
                    options={options}
                />
            </div>
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

    }
}