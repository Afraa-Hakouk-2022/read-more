import React, {Component} from "react";

class File extends Component {
    constructor() {
        super() 
            this.state = {VerbToBE : "Is a "}
    }
    render() {
        return(
            <h1>{this.props.firstName} {this.props.lastName} {this.state.VerbToBE} {this.method("WebDesigner")}</h1>
        );
    }
    method(position) {
        return(
            <h1> {position} </h1>
        );
    }
};

export default File;