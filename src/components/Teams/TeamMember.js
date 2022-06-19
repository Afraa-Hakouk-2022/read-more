import React, { Component } from "react";

class TeamMember extends Component {
    render() {
        return(
            <div className = "col-lg-4 col-md-6 col-sm-6 col-xs-12 nextTo">
                <div className = "card">
                    <img style = {{maxWidth : '100%'}} src = {this.props.img}/>
                
                    <div className="card-body center" style = {{backgroundColor : this.props.website ? 'white' : 'gray'}}>
                        <h2 className="text-width"> {this.props.name} </h2>
                        <h5> {this.props.position} </h5>
                        <div> {this.props.phone} </div>
                        <div> {this.props.email} </div>
                        <h6> {this.props.website} </h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamMember;