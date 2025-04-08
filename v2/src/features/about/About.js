import React from "react";
import Navbar  from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import about from "../../assets/about.jpg";

const About = () => {
    return (
        <div>
            <Navbar />
            <Header 
            title="ABOUT CEBBA"
            bgImage= {about}
            />
        </div>
    );
}


export default About;