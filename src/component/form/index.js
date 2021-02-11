import React, { Component } from 'react';
import "./style.css"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <input className={this.props.className} name={this.props.name} value={this.props.value} type={this.props.type} placeholder={this.props.placeholder} checked={this.props.checked} onChange ={this.props.onChange} onClick={this.props.onClick}></input>
            </>
            
         );
    }
}

export default Form;