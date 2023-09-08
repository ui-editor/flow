// Libraries.

import React, { Component } from "react";
import ReactDOM from "react-dom";

// Dependencies.
import "./Index/index.css";

// Components.

import Components from "./Components";
import Events from "./Events";
import DynamicComponent from "./DynamicComponent";
import Preview from "./Preview";

import Markup from './Markup';
import Style from  "./Style";
import State from "./State";


// Utility components.

import {convertToReact, convertToReactRedux} from "./utilities/CodeGenerator/React/export";
import { getNestedComponents, initialiseComponents} from "./utilities/Runtime"

// Reducers.
import { updateEvent, updateConfig, saveElement, updateSelectedComponent } from "./Index/Reducer";

// Utils
import { readData, writeData } from "./utilities/Storage";
import {onDeleteComponent, onDeleteFolder, onExtendComponent} from "./Components/Events";

// Constants
import { CONSTANTS } from "./utilities/Constants"; 

class Index extends Component {
    constructor(props) {
        super(props);
        let components = readData("ui-editor");
        this.state = {
            components: components,
            selectedTag: "",
            component: {
                name: "",
                markup: "",
                style: "",
                state: "{ }",
                events: []
            },
            selectedComponent: "",
            folders: readData("folders"),
            selectedTab: "Events"
        }
        this.updateConfig = updateConfig.bind(this);
        this.updateEvent = updateEvent.bind(this);
        this.saveElement = saveElement.bind(this);
        this.updateSelectedComponent = updateSelectedComponent.bind(this);
        document.onkeydown = function keydown(e){
            if(e.altKey && e.keyCode==69) { // Alt + E
                // Open/close editor if any component is selected
                this.setState({
                    showEditor: !this.state.showEditor
                })
            }
        }.bind(this);
        window.refreshComponents = this.refreshComponents.bind(this);
    }

    refreshComponents() {
        this.setState({
            components: window.components
        })
    }

    updateFolders(folders) {
        this.setState({
            folders: folders
        })
        writeData("folders", folders)
    }

    openEditor() {
        this.setState({
            showEditor: true
        })
    }

    exportReact(e){
        window.visited = {};
        let nestedComponents = getNestedComponents(this.state.selectedComponent)
        // nested components contain duplicates. we need to remove it
        let uniqueComponents = {}
        nestedComponents.forEach(component=>{
            if(!uniqueComponents[component.name]){
                uniqueComponents[component.name]=component;
            }
        })
        console.log(Object.values(uniqueComponents).map(convertToReact).join("\n\n"))
    }

    render() {
        const selectedComponent = this.state.selectedComponent || this.state.component;
        window.components.forEach(initialiseComponents)
        return (
            <div >

                <Components
                    components={this.state.components}
                    folders={this.state.folders}
                    selectedComponent={this.state.selectedComponent}
                    title="Components"
                    key={Math.ceil(Math.random() * 1000)}

                    onOpenEditor={this.openEditor.bind(this)}
                    onSelection={this.updateSelectedComponent}
                    onFoldersUpdate={this.updateFolders.bind(this)}
                />
                <DynamicComponent onSave={this.props.onSave} key={Math.ceil(Math.random() * 1000)} component={selectedComponent}/>
                <Preview></Preview>
                <Markup markup={selectedComponent.markup} key={Math.ceil(Math.random() * 1000)}></Markup>
                <Style style={selectedComponent.style} key={Math.ceil(Math.random() * 1000)}></Style>
                <State state={selectedComponent.state} key={Math.ceil(Math.random() * 1000)}></State>

                <Events
                    key={Math.ceil(Math.random() * 1000)}
                    component={selectedComponent}
                    selectedTag={this.state.selectedTag}
                    components={this.state.components}
                    onEventsUpdate={this.updateEvent}
                    onConfigUpdate={this.updateConfig}
                    title="Events"
                />
            </div>
        );
    }
}
console.log("Source code https://github.com/imvetri/ui-editor")
ReactDOM.render(<Index />, document.getElementById("index"));