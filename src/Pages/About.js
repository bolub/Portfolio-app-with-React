import React, { Component } from 'react';
import HorizontalCode from './../Components/HorizontalCode';
import classes from './../Components/Card.module.css';
import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from "mdbreact";

class About extends Component{
    render(){
        return(
             <div className="text-center primary-color" id="about">
            <MDBContainer className="text-white py-5">
                <div className="mt-4">
                    <h1 className="h2-responsive">ABOUT</h1>
                    <HorizontalCode />

                    <MDBRow className="my-4">
                        <MDBCol md="7" className="m-auto">
                            <p className={classes.aboutText + " text-left aboutText px-4 px-sm-0"}>I love writing code.....obviously <i className="em em-smiley mb-1"></i>   , I love math, and suprisingly, I love teaching, I also play the violin</p>
                        
                            <MDBRow className="text-dark">
                                <MDBCol md="6">
                                    <MDBCard className={classes.w75 + " h-100"}>
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize:"1rem"}}>Languages I speak</MDBCardTitle>
                                            <MDBCardText>
                                                Html, css, js
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol md="6" className="mt-3 mt-md-0">
                                    <MDBCard className={classes.w75 + " h-100"}>
                                        <MDBCardBody>
                                            <MDBCardTitle style={{fontSize:"1.1rem"}}>Frameworks</MDBCardTitle>
                                            <MDBCardText>
                                               Bootstrap, Reactjs, Nodejs, Expressjs
                                            </MDBCardText>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>

                            <a className="btn mt-5 text-white py-3 rounded primary-color waves-effect" href="https://drive.google.com/file/d/139R4DEZZdVaFU0Wf9MOM_CpCjL00BWcK/view?usp=drivesdk" style={{border:"1px solid white"}}>
                                <MDBIcon className="fab fa-download fa-lg mr-3" />
                                Download Resume
                            </a>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>
        </div>
        );
    }
}

export default About;