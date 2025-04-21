import React from "react"

import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
import Map from "../../components/map/Map"
import initialState from "../../state/initialState"
import contact from "../../assets/contact.jpg"



const contactUs = () => {
    const { ContactPage, companyInfo } = initialState;
    return (
        <div>
            <Navbar />
            <Header
                title={"Contact Us"}
                text={ContactPage.header.text}
                bgImage={ContactPage.header.bgImage}
                number={companyInfo.contact}
                location={companyInfo.location}
                website={companyInfo.website}
            />
            <Contact />
            <Map/>
            <Footer />
        </div>
    )
}


export default contactUs