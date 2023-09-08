
// Libraries.

import React, { Component } from 'react';


import {UnControlled as CodeMirror} from 'react-codemirror2';

class Markup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markup:this.props.markup
        };

    }

    render() {
        let markup= this.state.markup;
        // TODO: Should pass the current data. Instead of accessing it from global
        return (
            <div className="container editor-tab">
                    <div className="editor markup">
                        <div >Component Markup</div>
                        <CodeMirror
                            autoCursor={false}
                            value={markup}
                            options={{
                                lineNumbers: false,
                                mode: "text/javascript",
                                theme: "darcula",
                                indentWithTabs: false,
                                smartIndent: true,
                                lineWrapping: true
                            }}
                            onChange={(editor, data, markup) => {
                                this.setState({
                                    markup: markup
                                })
                            }}
                        />
                </div>
            </div>
        );
    }
}

export default Markup;
