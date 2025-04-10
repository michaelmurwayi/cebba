import React from "react";

import service from "../../assets/service.png";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Service from "../../components/service1/Service";

const Services = () => {
    return (
        <div className="services">
            <Navbar />
            <Header 
            title="Our Services"
            bgImage={service}
            />
            <Service />
        </div>
    );
}
export default Services;