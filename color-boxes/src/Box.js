import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { color: 'purple' };
        this.handleClick = this.handleClick(this);
    }

    handleClick() {

    }

    render() {
        return (
            <div className='Box' style={{ backgroundColor: this.state.color } onclick={this.handleClick}} >

            </div >
        )
    }
}

export default Box;