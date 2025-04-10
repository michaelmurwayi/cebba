import React from "react";

import service from "../../assets/service.png";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Service from "../../components/service1/Service";
import initialState from "../../state/initialState";

const Services = () => {
    const marketing = initialState.services[1];
    return (
        <div className="services">
            <Navbar />
            <Header 
            title="Our Services"
            bgImage={service}
            />
            <Service
            title={marketing.title}
            image={marketing.image}
            descriptions={marketing.descriptions}
            />
        </div>
    );
}
export default Services;