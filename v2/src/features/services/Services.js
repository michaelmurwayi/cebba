import React from "react";

import service from "../../assets/service.png";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Service from "../../components/service1/Service";
import initialState from "../../state/initialState";
import Service2 from "../../components/service2/Service";

const Services = () => {
    const marketing = initialState.services[1];
    const agronomy = initialState.services[0];
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
            <Service2
            title={agronomy.title}
            image={agronomy.image}
            descriptions={agronomy.descriptions}
            />
        </div>
    );
}
export default Services;