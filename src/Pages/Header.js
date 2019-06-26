import React from 'react';
import HorizontalCode from './../Components/HorizontalCode';
import { MDBContainer, MDBAnimation} from "mdbreact";
import profilePic from './../Assets/Pictures/profile.png';

const Header = () => {
    return (
        <div className="text-center primary-color vh-100" id="header">
            <MDBContainer className="text-white py-5">
                <MDBAnimation type="rollIn" duration="2s" className="mt-5">
                    <img className="img-fluid mt-4 mt-md-5 img-responsive" src={profilePic} alt="profile-img"/>
                </MDBAnimation>

                <div className="mt-4">
                    <h1 className="h1-responsive">Boluwatife Abiola</h1>
                    <HorizontalCode/>
                    <p className="lead lead-sm">Full Stack Web developer</p>
                </div>
            </MDBContainer>
        </div>
    );
}

export default Header;