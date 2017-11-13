import React, {Component} from 'react';
import markdown from 'marked';
import './css/MarkDown.css';
var renderer = new markdown.Renderer();

renderer.paragraph = function (text) {
    return '<p>' + text + '</p>'+'</br>';
};

export default class MarkDown extends Component {


    desc = (description) => {

        var des = markdown(description, {renderer: renderer});
        return {__html: des}
    }


    render() {
        const {description} =this.props;
        return (
            <div style={{width:'100%',height:'100%',backgroundColor:'#FFFFFF',paddingTop:20}}>
                <div className="introduceGame" dangerouslySetInnerHTML={this.desc(description)}></div>
            </div>

        );
    }
}
