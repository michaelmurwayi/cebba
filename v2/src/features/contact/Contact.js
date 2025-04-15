import React from "react"

import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Contact from "../../components/contact/Contact"
import Footer from "../../components/footer/Footer"
import Map from "../../components/map/Map"

import contact from "../../assets/contact.jpg"



const contactUs = () => {
    return (
        <div>
            <Navbar />
            <Header title="Contact US" bgImage={contact} />
            <Contact />
            <Map/>
            <Footer />
        </div>
    )
}


export default contactUs