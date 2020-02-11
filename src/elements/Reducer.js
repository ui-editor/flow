// Dependencies.

import {writeData} from "../utilities/localStorage";



export function onDelete(event) {
    let componentName = event.target.parentElement.parentElement.innerText.split("\n")[0];

    if(this.state.elements.find(component=>component.name===componentName).length<1){
        return;
    }
    // Get all the elements
    let elements = Array.from(this.state.elements);
    
    // Find the index of element to be deleted.
    let index = elements.findIndex(component=>component.name===componentName)

    // Remove the element from the list
    elements.splice(index,1);

    // Update the state with new elements.
    this.setState({
        elements: elements
    })

    // Persist the changes.
    writeData("ui-editor", elements)

}
