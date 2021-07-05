import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => (
    // <!--contact-->
    <section id="contact-me">
        {/* <!--text--> */}
        <div class="contact-me-text"></div>
    <div class="contact-heading">
    <h2>Contact me</h2>
</div>
{/* // <!--contact-me-container--> */}
<div class="c-box-container">
    {/* <!--contactbox--> */}
    <div class="contact-box">
        {/* <!--icon--> */}
        <div class="c-box-icon">
            <FontAwesomeIcon icon="envelope" />
        </div>
        {/* <!--contact-box-text--> */}
        <div class="c-box-text">
            <strong>Email</strong>
            <a href="mailto:barrera.antonio@gmail.com">Barrera.antonio@gmail.com</a>
        </div>
    </div>
    <div class="contact-box">
        {/* <!--icon--> */}
        <div class="c-box-icon">
            <FontAwesomeIcon icon="linkedin" />
        </div>
        {/* <!--contact-box-text--> */}
        <div class="c-box-text">
            <strong>Linkedin</strong>
            <a href="https://www.linkedin.com/in/antonio-barrera-4a63b2202/">Linkedin</a>
        </div>
    </div>
    <div class="contact-box">
        {/* <!--icon--> */}
        <div class="c-box-icon">
            <FontAwesomeIcon icon="github"/>
        </div>
        {/* <!--contact-box-text--> */}
        <div class="c-box-text">
            <strong>Github</strong>
            <a href="https://github.com/Abarrera123">Abarrera123</a>
        </div>
    </div>
</div>
</section >
    );

export default Contact;
