import React from "react";
import {NavHashLink} from "react-router-hash-link";
import About from "../image/aboutus.jpg";
import Vector from "../image/vector.png";
import Mission from "../image/mission.jpg";
import Vision from "../image/vision.jpg";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Home = () => {
    const openChat = () => {
        window.open("");
    }

    return(
        <>
            <header className="container-fluid mb-5" id="header">
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center vh-100">
                        <h1>Good People <br/> are needed to build a <br/> Good Society</h1>
                    </div>
                </div>
            </header>

            <div className="">
                <NavHashLink className="footer-icon whatsaap-icon text-white" onClick={openChat} to=""><WhatsAppIcon /></NavHashLink>
            </div>

            <section className="container-fluid my-5 px-md-5" id="about-us">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>About Us</h1>
                        <article>
                            <p>Society building is such a system that any country or civilization takes thousands of years to make. The operation of the social system and the design of its work depends on what and under what circumstances that civilization was born. For building a good and strong society, it is necessary that its framework and functioning should be governed keeping in mind the interests of every class and community living in the society.</p>
                            <p>We (Society in care) strongly believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Following this model of Civic Driven Change, Smile Foundation sensitizes and engages civil society, making it an active partner in all its welfare initiatives.</p>
                        </article>
                    </div>
                    <div className="col-lg-6">
                        <img src={About} className="img-fluid" alt="about illustration"/>
                    </div>
                </div>
            </section>

            <section className="container-fluid">
                <div className="row">
                    <div className="col no-gutters">
                        <img src={Vector} alt="illustration" className="img-fluid"/>
                    </div>
                </div>
            </section>

            <section className="container-fluid my-5 px-md-5" id="mission">
                <div className="row">
                    <div className="col-lg-6 order-lg-2">
                        <h1>Mission</h1>
                        <article>
                            <p>Good people are needed to build a good society. So that with the help of those good people, society can solve the mass problems of every class and make their lives happy.</p>
                            <p>People with the same ethics, attitudes, beliefs, customs form a society. The main objective of our organization is to create a group of individuals who will help us in fulfilling different types of objectives through our society building programs.</p>
                            <p>The mission of the Society in Care is to make the lives of the people of society happy by providing guidance in social and administrative problems.</p>
                        </article>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <img src={Mission} className="img-fluid" alt="mission illustration"/>
                    </div>
                </div>
            </section>

            <section className="container-fluid my-5 px-md-5" id="vision">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>Vision</h1>
                        <article>
                            <p>The operation of the social system and the design of its work depends on what and under what circumstances that civilization was born. For building a good and strong society, it is necessary that its framework and functioning should be governed keeping in mind the interests of every class and community living in the society.</p>
                            <p>Our vision is to find out the people who are energetic, talented, and want to contribute to building a better society. We will bring them under one roof and join hands to make our society more responsible, vigilant, and enthusiastic.</p>
                        </article>
                    </div>
                    <div className="col-lg-6">
                        <img src={Vision} className="img-fluid" alt="vision illustration"/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;