import React from "react";
import Home1 from "./Home_1";

function HomeWork1() {
    return(
        <div className="boxs">
            <Home1
                O = {{
                    img : "https://picsum.photos/240",
                    name : "Afraa Hakouk",
                    position : "WebDesigner",
                    website : "Cake.com",
                }}
            />
            <Home1
                O = {{
                    img : "https://picsum.photos/241",
                    name : "Abd-Alkader Hakouk",
                    position : "Designer",
                    website : "Illustrator.com",
                }}
            />
            <Home1
                O = {{
                    img : "https://picsum.photos/243",
                    name : "Ahed Hakouk",
                    position : "Designer",
                    website : "Photoshop.com",
                }}
            />
            <Home1
                O = {{
                    img : "https://picsum.photos/244",
                    name : "Amer Hakouk",
                    position : "Elctric.com",
                    website : "",
                }}
            />
            <Home1
                O = {{
                    img : "https://picsum.photos/245",
                    name : "Afraa Hakouk",
                    position : "WebDesigner",
                    website : "Camera.com",
                }}
            />
        </div>
    );
}

export default HomeWork1;