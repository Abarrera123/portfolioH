import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Skills = () => (
    // <!--skills-->
    <section id="skills">
        {/* <!--text--> */}
        <div class="skill-text">
            {/* <!--heading--> */}
            <div class="skill-heading">
                <h2>My Expertise</h2>
            </div>
            {/* <!--skill-box-container--> */}
            <div class="s-box-container">
                {/* <!--skillbox--> */}
                <div class="skill-box">
                    {/* <!--icon--> */}
                    <div class="s-box-icon">
                         <i class="fab fa-html5"></i>
                    </div>
                    {/* <!--skill-box-text--> */}
                    <div class="s-box-text">
                        <strong> Hyper Text Markup Language(HTML)</strong>
                        <p> I have a year experience working with HTML. HTML is the main langue I use for the front-end
                            of my projects.</p>
                    </div>
                </div>
                {/* <!--skillbox--> */}
                <div class="skill-box">
                    {/* <!--icon--> */}
                    <div class="s-box-icon">
                        <FontAwesomeIcon icon="css"/>
                    </div>
                    {/* <!--skill-box-text--> */}
                    <div class="s-box-text">
                        <strong> Cascadeing Style Sheets(CSS)</strong>
                        <p> I have a year experience working with CSS. CSS is the main langue I use for the front-end of
                            my projects.</p>
                    </div>
                </div>
                {/* <!--skillbox--> */}
                <div class="skill-box">
                    {/* <!--icon--> */}
                    <div class="s-box-icon">
                        <FontAwesomeIcon icon="javascript" />
                    </div>
                    {/* <!--skill-box-text--> */}
                    <div class="s-box-text">
                        <strong> JavaScript (Js)</strong>
                        <p> I have a year experience working with JS. JS is the main langue I use for the front-end of
                            my projects.</p>
                    </div>
                </div>
                <div class="skill-box">
                    {/* <!--icon--> */}
                    <div class="s-box-icon">
                        <FontAwesomeIcon icon ="nodeJS" />
                    </div>
                    {/* <!--skill-box-text--> */}
                    <div class="s-box-text">
                        <strong> JS Node </strong>
                        <p> I have a year experience working with JS. JS is the main langue I use for the back-end of my
                            projects.</p>
                    </div>
                </div>

            </div>
        </div>
        {/* <!--img--> */}
        <div class="skill-img">
        </div>
    </section>
    
);

export default Skills;
