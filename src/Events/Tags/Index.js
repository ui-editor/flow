// Libraries.

import React, { Component } from "react";

import "./Style.css"

import Nodes from "../../utilities/Components/Nodes";

import { getNodeTree } from "../../utilities/get-node-tree.js";


class Tags extends Component {
    constructor(props) {
        super(props);        
        this.state = {}
    }


    render() {

        const component = this.props.component;

        let nodeTree = getNodeTree(component, component.markup, component.style, JSON.parse(component.state), component.events);

        // Report error.
        if (nodeTree.error !== undefined) {
            return nodeTree.error;
        }

        // Report error if component is not 
        if (nodeTree.result === undefined && this.state.components.length != 0) {
            return (
                <ul className="container events-tab">
                    <div className="title">Events</div>
                </ul>
            );
        }


        return (

            <div>
                <div className="title">
                    Tags
                </div>
                <div className="tags">
                    <Nodes node={nodeTree.result} onSelectedTagChanged={this.props.onSelectedTagChanged} />
                </div>
            </div>
        );
    }
}

export default Tags;
