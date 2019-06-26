import React, { Component } from 'react';
import { Link } from "react-scroll";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse} from "mdbreact";


class Nav extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <MDBNavbar className="rgba-black-strong" dark expand="md" fixed="top">
                <MDBNavbarBrand>
                    <span className="white-text h2-responsive brand">Bolub</span>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />

                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <Link className="nav-link" to="header" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link className="nav-link" to="portfolio" activeClass="active" spy={true} smooth={true} offset={-86} duration={500}>Portfolio</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link className="nav-link" to="about" activeClass="active" spy={true} smooth={true} offset={-86} duration={500}>About</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link className="nav-link" to="contact" activeClass="active" spy={true} smooth={true} offset={-86} duration={500}>Contact</Link>
                        </MDBNavItem>
                    </MDBNavbarNav>

                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Nav;