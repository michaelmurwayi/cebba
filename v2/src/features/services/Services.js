import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import service from "../../assets/service.png";

const Services = () => {
    return (
        <div className="services">
            <Navbar />
            <Header 
            title="Our Services"
            bgImage={service}
            />
        </div>
    );
}
export default Services;