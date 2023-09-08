
// Libraries.

import React, { Component } from 'react';



class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            configs:[]
        };
    }

    render() {

        // TODO: Should pass the current data. Instead of accessing it from global
        return (
                <div className="container editor-tab">
                </div>
        );
    }
}

export default Preview;
