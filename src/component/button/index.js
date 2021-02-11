import React, { Component } from 'react';
import "./style.css"

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <button className={this.props.className} type={this.props.type} onClick={this.props.onClick}>{this.props.label}</button>
        );
    }
}
 
export default Button;