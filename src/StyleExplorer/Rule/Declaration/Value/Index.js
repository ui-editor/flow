// Libraries.

import React, { Component } from "react";

import "./Style.css";

class Value extends Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props);
    }

    render() {
        return (
            <span>{this.props.value}</span>
        );
    }
}

export default Value;
