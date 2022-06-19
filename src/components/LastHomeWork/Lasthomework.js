import React, {Component} from "react";
import memberInfo from "../Teams/memberInfo";
import TeamMember from "../Teams/TeamMember";
import "./../../style.css";

class LastWork extends Component {
    constructor() {
        super()
        this.state = {
            number : 0,
            memberMore : [],
            memberInfo : memberInfo,
        };
        this.clickMore = this.clickMore.bind(this);
    }
    
    clickMore() {
        if (this.state.memberMore.length < this.state.memberInfo.length) {
            this.state.memberMore.push( this.state.memberInfo[this.state.number] )
            this.setState(prevNum => {
                return {number : prevNum.number + 1}
            });
            this.p = this.state.memberMore.map(member => <TeamMember
                id = {member.id}
                img = {member.img}
                name = {member.name}
                position = {member.position}
                phone = {member.phone}
                email = {member.email}
                website = {member.website}
            />
            );
        };
    }    

    render() {
        return(
            <div className="row">
                <button className="container bg-black text-white rounded" onClick={this.clickMore}>
                    More Of Our Team
                </button>
                <div className = "col-lg-12">
                    {this.p}
                </div>
            </div>
        )
    }
}

export default LastWork;