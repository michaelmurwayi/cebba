import React from "react";

import service from "../../assets/service.png";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Service from "../../components/service1/Service";
import initialState from "../../state/initialState";
import Service2 from "../../components/service2/Service";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

const Services = () => {
    const servicePage = initialState.ServicePage
    const agronomy = initialState.services[0];
    const advocacy = initialState.services[1];
    const marketing = initialState.services[2];
    const quality = initialState.services[3];
    const contact = initialState.companyInfo.contact;
    const location = initialState.companyInfo.location;
    const website = initialState.companyInfo.website;
    return (
        <div className="services">
            <Navbar />
            <Header 
            title="Our Services"
            bgImage={service}
            text={servicePage.header.text}
            number={contact}
            location={location}
            website={website}
            />
            <Service
            title={agronomy.title}
            image={agronomy.image}
            descriptions={agronomy.descriptions}
            />
            <Service2
            title={advocacy.title}
            image={advocacy.image}
            descriptions={advocacy.descriptions}
            />
            <Service
            title={marketing.title}
            image={marketing.image}
            descriptions={marketing.descriptions}
            />
            <Service2
            title={quality.title}
            image={quality.image}
            descriptions={quality.descriptions}
            />
            <Contact />

            <Footer />
        </div>
    );
}
export default Services;