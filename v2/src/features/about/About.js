import React from "react";
import Navbar  from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import about from "../../assets/about.jpg";
import Section1 from "../../components/section1/Section";

const About = () => {
    return (
        <div>
            <Navbar />
            <Header 
            title="ABOUT CEBBA"
            bgImage= {about}
            />
            <Section1 />
        </div>
    );
}


export default About;