import React from 'react';
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";

const About= () => {
    return (
        <div className="text-center bg-dark mt-4" id="about">
            <MDBContainer className="text-white py-5">
                <MDBRow>
                    <MDBCol>
                        <h4 className="h4-responsive font-weight-bold mb-4">AROUND THE WEB</h4>

                        <div className="d-flex flex-row">
                            <div className="m-auto">
                                <a href="https://www.facebook.com/abiola.bolu" target="blank">
                                    <i className="fab fa-facebook text-white fa-2x border rounded-circle p-3"></i>
                                </a>

                                <a href="https://www.linkedin.com/in/abiola-boluwatife-2569a915b/" target="blank" className="ml-3">
                                    <i className="fab fa-linkedin text-white fa-2x border rounded-circle p-3"></i>
                                </a>

                                <a href="https://github.com/bolub" target="blank" className="ml-3">
                                    <i className="fab fa-github text-white fa-2x border rounded-circle p-3"></i>
                                </a>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow> 
            </MDBContainer>
        </div>
    );
}

export default About;