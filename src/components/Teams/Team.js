import React, { Component } from "react";
import TeamMember from './TeamMember';
import memberInfo from "./memberInfo";

class Team extends Component {
    constructor() {
        super()
        this.state = { memberInfo : memberInfo }
        this.mapping = this.mapping.bind(this);
    }

    mapping(x) {
        const members = x.map(member => <TeamMember
                                            id = {member.id}
                                            img = {member.img}
                                            name = {member.name}
                                            position = {member.position}
                                            phone = {member.phone}
                                            email = {member.email}
                                            website = {member.website}
                                        />
        );
        return(members);
    }

    render() {
        return(
            <div>{this.mapping(this.state.memberInfo)}</div>
        )
    }

    // render() {
    //     const info = [
    //         {id : 1,     img : "https://picsum.photos/200",      name : "Afraa Hakouk",         position : "WebDesigner",       phone : "0936593801",       email : "afraa.hakouk.2017@gmail.com",       website : "Cake.com"   ,},
    //         {id : 2,     img : "https://picsum.photos/201",      name : "Ahod Hakouk",          position : "Designer",          phone : "0936593801",       email : "ahod.hakouk.2017@gmail.com",        website : "Camera.com" ,},
    //         {id : 3,     img : "https://picsum.photos/202",      name : "Abd-Alkader Hakouk",   position : "WebDesigner",       phone : "0936593801",       email : "afraa.hakouk.2017@gmail.com",                               },
    //         {id : 4,     img : "https://picsum.photos/203",      name : "Amro Hakouk",                                          phone : "0936593801",       email : "ahod.hakouk.2017@gmail.com",                                },
    //         {id : 1,     img : "https://picsum.photos/200",      name : "Afraa Hakouk",         position : "WebDesigner",       phone : "0936593801",       email : "afraa.hakouk.2017@gmail.com",       website : "Cake.com"   ,},
    //         {id : 2,     img : "https://picsum.photos/201",      name : "Ahod Hakouk",          position : "Designer",          phone : "0936593801",       email : "ahod.hakouk.2017@gmail.com",        website : "Camera.com" ,},
    //         {id : 3,     img : "https://picsum.photos/202",      name : "Abd-Alkader Hakouk",   position : "WebDesigner",       phone : "0936593801",       email : "afraa.hakouk.2017@gmail.com",                               },
    //         {id : 4,     img : "https://picsum.photos/203",      name : "Amro Hakouk",                                          phone : "0936593801",       email : "ahod.hakouk.2017@gmail.com",                                },
    //     ];

    //     const members = info.map(member => <TeamMember
    //                         id = {member.id}
    //                         img = {member.img}
    //                         name = {member.name}
    //                         position = {member.position}
    //                         phone = {member.phone}
    //                         email = {member.email}
    //                         website = {member.website}
    //                     />
    //     );
            
    //     return(
    //         <div className = "row">
    //             {members}
    //         </div>
    //     );
    // }
}

export default Team;


//     const info = [
//         {id : 1,     img : "https://picsum.photos/200",      name : "Afraa Hakouk",         position : "WebDesigner",       phone : "0936593801",       email : "afraa.hakouk.2017@gmail.com",       website : "Cake.com"   ,},
//         {id : 2,     img : "https://picsum.photos/201",      name : "Ahod Hakouk",          position : "Designer",          phone : "0936593801",       email : "ahod.hakouk.2017@gmail.com",        website : "Camera.com" ,},
//         {id : 3,     img : "https://picsum.photos/202",      name : "Abd-Alkader Hakouk",   position : "WebDesigner",       phone : "0936593801",       email : "afraa.hakouk.2017@gmail.com",                               },
//         {id : 4,     img : "https://picsum.photos/203",      name : "Amro Hakouk",                                          phone : "0936593801",       email : "ahod.hakouk.2017@gmail.com",                                },
//         {id : 1,     img : "https://picsum.photos/200",      name : "Afraa Hakouk",         position : "WebDesigner",       phone : "0936593801",       email : "afraa.hakouk.2017@gmail.com",       website : "Cake.com"   ,},
//         {id : 2,     img : "https://picsum.photos/201",      name : "Ahod Hakouk",          position : "Designer",          phone : "0936593801",       email : "ahod.hakouk.2017@gmail.com",        website : "Camera.com" ,},
//         {id : 3,     img : "https://picsum.photos/202",      name : "Abd-Alkader Hakouk",   position : "WebDesigner",       phone : "0936593801",       email : "afraa.hakouk.2017@gmail.com",                               },
//         {id : 4,     img : "https://picsum.photos/203",      name : "Amro Hakouk",                                          phone : "0936593801",       email : "ahod.hakouk.2017@gmail.com",                                },
//     ];

//     const members = info.map(member => <TeamMember
//                 id = {member.id}
//                 img = {member.img}
//                 name = {member.name}
//                 position = {member.position}
//                 phone = {member.phone}
//                 email = {member.email}
//                 website = {member.website}
//             />
//     );

//     return(
//         <div className = "row">
//             {members}
//         </div>
//     );
// }

// export default Team;