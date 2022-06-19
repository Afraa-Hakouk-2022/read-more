import React, { Component } from 'react';
import './../style.css';

class Header extends Component {
    // const client = "programmer";
    // const title = {
    //     design : "Design",
    //     programming : "Programming"
    // }
    // const info = {
    //     name : "Afraa",
    //     nick : "Hakouk"
    // }
    // return(
    //     <div className = "navbar bg-black rounded text-white">
    //         Hello {info.name + ' ' + info.nick}
    //         <h1> {client === "designer" ? title.design : title.programming} Is My Life </h1>
    //     </div>
    // );
    render() {
        return(
            <div className='navbar bg-black rounded text-white'>
                <h1> Our Team </h1>
            </div>
        );
    }
}

export default Header;