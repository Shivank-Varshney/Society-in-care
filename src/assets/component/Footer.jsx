import React from "react";
import {NavLink} from "react-router-dom";
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import LocationOnIcon from '@material-ui/icons/LocationOn';

const curryear = new Date().getFullYear();

const Footer = () => { 
    const openfb = () => {
        window.open("https://www.facebook.com/societyincare");
    }
    const openinsta = () => {
        window.open("https://www.instagram.com/societyincare");
    }
    const opentwi = () => {
        window.open("https://twitter.com/societyincare");
    }
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
                            <NavLink className="footer-icon " to="" onClick={openfb}><FacebookIcon /></NavLink>
                            <NavLink className="footer-icon  mx-4" to="" onClick={openinsta}><InstagramIcon /></NavLink>
                            <NavLink className="footer-icon " to="" onClick={opentwi}><TwitterIcon /></NavLink>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col copyright">
                        <hr />
                        <p>© {curryear} <NavLink to="http://www.hardcipher.io" className="text-white">HardCipher Pvt Ltd</NavLink>. All Rights Reserved.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;