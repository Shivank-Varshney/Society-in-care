import React from "react";
import {NavHashLink} from "react-router-hash-link";
import Logo from "../image/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import Pdf from "../image/Code-of-conduct.pdf"

const Navbar = () => {
    const openPdf = () => {
        window.open(Pdf);
    } 
    return(
        <>
            <nav className="navbar navbar-expand-xl px-md-3">
                <NavHashLink className="navbar-brand" to="/">
                    <img src={Logo} alt="society in care logo" className="img-fluid" />
                </NavHashLink>
                <h3 className="text-white font-weight-bold pt-1">Society in Care</h3>
                <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <MenuIcon />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <List link="/#" linkname="Home"/>
                        <List link="/#about-us" linkname="About Us"/>
                        <List link="/#mission" linkname="Mission"/>
                        <List link="/#vision" linkname="Vision"/>
                        <List link="" linkname="Code of Conduct" onClick={openPdf} />
                        <List link="/Become-a-volunteer#" linkname="Become a volunteer "/>
                        <List link="/lodge-public-grievance#" linkname="Lodge Public Grievance "/>
                    </ul>
                </div>
            </nav>
        </>
    );
}

const List = (props) => {
    return(
        <>
            <li className="nav-item" onClick={props.onClick}>
                <NavHashLink smooth exact activeClassName="activecls" className="nav-link mx-1" to={props.link} data-toggle="collapse" data-target=".navbar-collapse.show">{props.linkname }</NavHashLink>
            </li>
        </>
    );
}

export default Navbar;