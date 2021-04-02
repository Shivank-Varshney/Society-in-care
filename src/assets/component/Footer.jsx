import React from "react";
import {NavHashLink} from "react-router-hash-link";
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

import LocationOnIcon from '@material-ui/icons/LocationOn';

const curryear = new Date().getFullYear();

const Footer = () => { 
    return(
        <>
            <section className="container-fluid" id="footer">
                <div className="row pt-3 px-sm-5 px-2">
                    <div className="col-md-4">
                        <h3 className="font-weight-bold my-3">Contact Us</h3>
                        <p><LocationOnIcon /> Lorem ipsum dolor sit amet.</p>
                        <p><CallIcon /> (+91) 9876543210</p>
                        <p><EmailIcon /> info@gmail.com</p>
                    </div>
                    <div className="col-md-4 ml-md-auto my-4 mt-md-0">
                        <h3 className="font-weight-bold my-3 text-md-center">Connect us on Social Media</h3>
                        <div className="text-md-center">
                            <NavHashLink className="footer-icon " to=""><FacebookIcon /></NavHashLink>
                            <NavHashLink className="footer-icon  mx-4" to=""><InstagramIcon /></NavHashLink>
                            <NavHashLink className="footer-icon " to=""><YouTubeIcon /></NavHashLink>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col copyright">
                        <hr />
                        <p>© {curryear} <NavHashLink to="" className="text-white">HardCipher Pvt Ltd</NavHashLink>. All Rights Reserved.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;